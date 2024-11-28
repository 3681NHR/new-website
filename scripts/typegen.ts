import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

interface TypeGeneratorOptions {
  configDir: string;
  outputFile: string;
  interfacePrefix?: string;
}

// Helper function to determine the most specific type
function getTypeFromValue(value: Array<unknown> | unknown): string {
  if (value === null) return 'any';
  if (typeof value === 'undefined') return 'any';
  const type = typeof value;
  switch (type) {
    case 'string':
      if (
        (typeof value === 'string' && value.startsWith('!include ')) ||
        (typeof value === 'string' && value.startsWith('!file ')) ||
        (typeof value === 'string' && value.includes('%'))
      ) {
        return 'string'; // Special YAML syntax
      }
      return 'string';
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'object':
      if (Array.isArray(value)) {
        if (value.length === 0) return 'any[]';
        const itemType = getTypeFromValue(value[0]);
        return `${itemType}[]`;
      }
      return 'any'; // Nested objects will have their own interfaces
    default:
      return 'any';
  }
}

// Generate interface name from filename
function generateInterfaceName(filename: string, prefix: string = 'I'): string {
  return `${prefix}${filename
    .replace(/\.ya?ml$/i, '')
    .replace(/[-_]/g, '')
    .replace(filename.charAt(0), filename.charAt(0).toUpperCase())}Config`;
}

// Recursively generate interfaces for nested objects
function generateNestedInterfaces(
  obj: Record<string, unknown>,
  baseName: string
): { interfaces: string[]; type: string } {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    return { interfaces: [], type: getTypeFromValue(obj) };
  }

  const properties: string[] = [];
  const nestedInterfaces: string[] = [];

  Object.entries(obj).forEach(([key, value]) => {
    if (value === null || value === undefined) {
      properties.push(`  ${key}: any;`);
      return;
    }

    if (typeof value === 'object' && !Array.isArray(value)) {
      const nestedInterfaceName = `${baseName}${key.charAt(0).toUpperCase() + key.slice(1)}`;
      const nestedResult = generateNestedInterfaces(
        value as Record<string, unknown>,
        nestedInterfaceName
      );
      nestedInterfaces.push(...nestedResult.interfaces);
      properties.push(`  ${key}: ${nestedResult.type};`);
    } else if (Array.isArray(value)) {
      if (value.length === 0) {
        properties.push(`  ${key}: any[];`);
      } else {
        const firstItem = value[0];
        if (typeof firstItem === 'object' && !Array.isArray(firstItem)) {
          const arrayInterfaceName = `${baseName}${key.charAt(0).toUpperCase() + key.slice(1)}Item`;
          const arrayResult = generateNestedInterfaces(
            firstItem,
            arrayInterfaceName
          );
          nestedInterfaces.push(...arrayResult.interfaces);
          properties.push(`  ${key}: ${arrayResult.type}[];`);
        } else {
          properties.push(`  ${key}: ${getTypeFromValue(firstItem)}[];`);
        }
      }
    } else {
      properties.push(`  ${key}: ${getTypeFromValue(value)};`);
    }
  });

  const interfaceDefinition = `interface ${baseName} {\n${properties.join('\n')}\n}`;

  return {
    interfaces: [...nestedInterfaces, interfaceDefinition],
    type: baseName,
  };
}

// // Function to change "url" keys to "path" in the pictures object
// function updatePictureUrls(obj: Record<string, unknown>) {
//   if (obj.pictures && typeof obj.pictures === 'object') {
//     console.log('Updating picture URLs in', obj);
//     const pictures = obj.pictures as Record<string, unknown>;
//     Object.entries(pictures).forEach(([, value]) => {
//       if (typeof value === 'object' && value !== null && 'url' in value) {
//         const picture = value as Record<string, unknown>;
//         picture.path = picture.url;
//         delete picture.url;
//       }
//     });
//   }
// }

function generateTypesFromYAML(options: TypeGeneratorOptions) {
  const { configDir, outputFile, interfacePrefix = 'I' } = options;

  const yamlFiles = fs
    .readdirSync(configDir)
    .filter(file => /\.ya?ml$/i.test(file));

  const generatedInterfaces: string[] = [
    '// Auto-generated TypeScript interfaces from YAML config files',
    '// Generated at: ' + new Date().toISOString(),
  ];

  const configTypeMapEntries: string[] = [];

  yamlFiles.forEach(file => {
    const filePath = path.join(configDir, file);

    try {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const parsedContent = yaml.parse(fileContent);

      // Update "url" keys to "path" in the pictures object to fix issue with image stuff
      //updatePictureUrls(parsedContent);

      const interfaceName = generateInterfaceName(file, interfacePrefix);
      const { interfaces } = generateNestedInterfaces(
        parsedContent,
        interfaceName
      );

      generatedInterfaces.push(...interfaces);

      //   const baseName = file.replace(/\.ya?ml$/i, '');
      configTypeMapEntries.push(`  '${file}': ${interfaceName};`);
    } catch (error) {
      console.error(`Error processing file ${file}:`, error);
    }
  });

  // Add ConfigTypeMap at the end
  const configTypeMap = `interface ConfigTypeMap {\n${configTypeMapEntries.join('\n')}\n}`;

  generatedInterfaces.push(configTypeMap);

  fs.writeFileSync(outputFile, generatedInterfaces.join('\n\n'));
  console.log(`Types generated successfully in ${outputFile}`);
}

// Example usage
export function generateConfigTypes() {
  generateTypesFromYAML({
    configDir: './config',
    outputFile: './src/types/config.d.ts',
    interfacePrefix: 'I',
  });
}

if (require.main === module) {
  generateConfigTypes();
}

export default generateTypesFromYAML;

import fs from 'fs';
import path from 'path';
import yaml from 'yaml';
import markdownIt from 'markdown-it';

const CONFIG_FOLDER = './config/';
const converter = new markdownIt({
  html: true,
  linkify: true,
  breaks: true,
});
// Dynamically typed config reader
export function getConfig<T extends keyof ConfigTypeMap>(
  loc: T
): ConfigTypeMap[T];
export function getConfig(loc: string): unknown {
  const configFile = path.resolve(CONFIG_FOLDER, loc);
  if (!fs.existsSync(configFile)) {
    console.warn(`WARNING: Config file ${loc} does not exist!`);
    return {};
  }
  const config = fs.readFileSync(configFile, { encoding: 'utf-8' });
  return yaml.parse(config, (key, value) => {
    if (typeof value === 'string') {
      // Existing include and file handling logic
      if (value.startsWith('!include ')) {
        return getConfig(
          path.resolve(configFile, '..', value.slice(9)) as keyof ConfigTypeMap
        );
      } else if (value.startsWith('!file ')) {
        return fs.readFileSync(path.resolve(configFile, '..', value.slice(6)), {
          encoding: 'utf-8',
        });
      }
      // ! TODO New logic for handling relative URLs
      // ! TODO Not implemented
      /* else if (
        loc !== 'global.yml' &&
        typeof key === 'string' &&
        (key === 'logo' || key.includes('image') || key.includes('url'))
      ) {
        const globalConfig = getConfig('global.yml');
        // Check if the value is a relative URL and not already an absolute URL
        if (
          globalConfig.image_host &&
          value &&
          !value.startsWith('http') &&
          !value.startsWith('/')
        ) {
          return `${globalConfig.image_host}${value}`;
        }
      } */
      // Existing global config replacement logic
      else if (value.includes('%') && loc !== 'global.yml') {
        const globalConfig = getConfig('global.yml');
        return value.replace(/%(\w+)%/g, (match, key: keyof IGlobalConfig) => {
          return globalConfig[key] !== undefined ? globalConfig[key] : match;
        });
      }
    }
    return value;
  });
}

// Markdown renderers
export function parseMD(val: string): { __html: string } {
  return { __html: converter.render(val || '') };
}

export function parseMDInline(val: string): { __html: string } {
  return { __html: converter.renderInline(val || '') };
}

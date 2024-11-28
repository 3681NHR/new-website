export default {
  './src/**/*.{js,jsx,ts,tsx}': files => [
    'tsc -p tsconfig.json --noEmit',
    `eslint ${files.join(' ')} --fix`,
  ],
  '*.{scss,css}': 'stylelint --fix',
};

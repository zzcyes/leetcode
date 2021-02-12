const {
    baseConfig,
    genCatalog,
    genConfig
} = require('./utils/generate-config.js');

const { title } = baseConfig;

genCatalog([
    { title, linksPath: './', filePath: './docs/catalogue.md' },
    { title, linksPath: './docs/', filePath: 'README.md' }
])

genConfig('./docs/.vuepress/config.js')

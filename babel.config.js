module.exports = {
  comments: false,
  presets: [
    [
      '@babel/preset-react', {
        runtime: 'automatic',
      },
    ],
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.26',
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/transform-runtime',
    'add-module-exports',
    'lodash',
    'transform-inline-environment-variables',
    [
      'babel-plugin-transform-imports',
      {
        '@mui/icons-material': {
          // eslint-disable-next-line no-template-curly-in-string
          transform: '@mui/icons-material/${member}',
          preventFullImport: true,
        },
        '@mui/lab': {
          // eslint-disable-next-line no-template-curly-in-string
          transform: '@mui/lab/${member}',
          preventFullImport: true,
        },
        '@mui/material': {
          // eslint-disable-next-line no-template-curly-in-string
          transform: '@mui/material/${member}',
          preventFullImport: true,
        },
        '@mui/system': {
          // eslint-disable-next-line no-template-curly-in-string
          transform: '@mui/system/${member}',
          preventFullImport: true,
        },
        '@mui/utils': {
          // eslint-disable-next-line no-template-curly-in-string
          transform: '@mui/utils/${member}',
          preventFullImport: true,
        },
      },
    ],
  ],
};

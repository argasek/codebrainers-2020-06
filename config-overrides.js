const { override, addDecoratorsLegacy, adjustStyleLoaders } = require("customize-cra");

function useEvalSourceMap(sourceMapMethod = 'eval-source-map') {
  return function(config) {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = sourceMapMethod;
    }

    return config;
  };
}

const enableStyleSourceMaps = ({ use: [ , css, postcss, resolve, processor ] }) => {
  css.options.sourceMap = true;         // css-loader
  postcss.options.sourceMap = true;     // postcss-loader
  // when enable pre-processor,
  // resolve-url-loader will be enabled too
  if (resolve) {
    resolve.options.sourceMap = true;   // resolve-url-loader
  }
  // pre-processor
  if (processor && processor.loader.includes('sass-loader')) {
    processor.options.sourceMap = true; // sass-loader
  }
};

module.exports = override(
  addDecoratorsLegacy(),
  // useEvalSourceMap(),
  adjustStyleLoaders(enableStyleSourceMaps)
);

module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: [
          ['module-resolver', {
            root: ['./src'],
            alias: {
              '@actions': './src/actions',
              '@components': './src/components',
              '@constants': './src/constants',
              '@navigators': './src/navigators',
              '@navigations': './src/navigations',
              '@reducers': './src/reducers',
              '@styles': './src/styles',
              '@stores': './src/stores',
              '@views': './src/views',
            },
          }],
        ],
      },
    },    
  };
};

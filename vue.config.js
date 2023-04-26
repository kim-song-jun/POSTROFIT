const {defineConfig} = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://18.183.199.196:8000/backend-service',
  },
});

/*
 * @Date: 2021-11-18 09:20:51
 * @LastEditors: Aiva
 * @LastEditTime: 2021-12-21 12:53:27
 * @FilePath: \yilin-music\craco.config.js
 */
const CracoLessPlugin = require('craco-less');
const themeConfig = require('./theme.config')
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
    devServer:{
        port:5000,
    },
    webpack: {
        alias: {
            '@': resolve('src'),
            '~': resolve('node_modules'),
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: themeConfig,
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
}
/*
 * @Date: 2021-11-18 09:20:51
 * @LastEditors: Aiva
 * @LastEditTime: 2021-11-18 10:44:11
 * @FilePath: \yilin-music\craco.config.js
 */
const CracoLessPlugin = require('craco-less');
const themeConfig = require('./theme.config')
const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
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
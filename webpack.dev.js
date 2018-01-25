const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(commonConfig, {
    devtool : 'inline-source-map',  //代码关联显示方式便于调试
    devServer : {
        historyApiFallback : true,
        hot : true,  //开启热模块替换
        port : 80,   //服务器端口
        host : 'localhost',  
        // open : true,  //自动打开浏览器标签
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(), //加载热替换插件
    ]
});
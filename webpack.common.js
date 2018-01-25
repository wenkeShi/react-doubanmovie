const path =  require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry : ['babel-polyfill','./app/index.js'],  //项目起点入口
    output : {
        path : path.resolve(__dirname,'build'),//文件的输入目录
        filename : 'static/js/[name].[hash:5].js',
    },
    module : { //模块加载
        rules : [
            {
                test : /\.css$/, //匹配规则
                use : [
                    {loader : "style-loader"},
                    {loader : "css-loader"},
                ]
            },{
                test : /\.(js|jsx)$/,
                exclude : /node_modules/, //不包括
                use : {
                    loader : 'babel-loader',
                }
            },{
                test : /\.(png|svg|jpg|gif)$/,
                use : {
                    loader : 'url-loader',
                    options: {
                        limit : 8192, //小于8192B文件转为base64文件
                        name : 'static/iamges/[name].[hash:5].[ext]',
                    }
                }
            }
        ]
    },
    plugins : [
        new CleanWebpackPlugin(['build']), //清空编译输入文件夹
        new HtmlWebpackPlugin({
            title : 'hello react app',
            filename : 'index.html',
            template : path.resolve(__dirname,'template','index.html'),
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name : 'commons'
        }),  //公用代码打包
    ]
}
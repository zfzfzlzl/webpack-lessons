/* 
* @Author: anchen
* @Date:   2018-09-07 15:12:52
* @Last Modified by:   anchen
* @Last Modified time: 2018-09-10 15:26:42
*/
const path = require('path');
module.exports = {
    //设置入口文件的绝对路径
    entry : path.resolve('src/index.js'),
    //设置输出
    output : {
        path : './build',//输出目录
        filename : 'bundle.js'//输出文件名
    },
    //配置模块
    module:{
        loaders : [//指定不同文件的加载器
            {
               test:/\.js$/,//指定要加载的文件
               loader:'babel-loader'//指定加载器 
            }
            
        ]
    }
}
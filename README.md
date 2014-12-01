imooc
=======
这是 node+mongodb 100分钟建站攻略（一期）源码  

部署方式：  
在项目根目录中，执行命令行：

    bower install
    npm install


1. 需要分析
2. 项目依赖初始化
3. 入口文件编码
4. 创建视图
5. 测试前端流程
6. 样式开发，伪造模板数据
7. 设计数据库模型
8. 开发后端逻辑
9. 配置依赖文件，网站开发结束


express: Express 是一个简洁、灵活的 node.js Web 应用开发框架, 它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。  
mongoose: mongoDB 连接工具  
jade: Template Engine  
moment.js: Javascript日期处理类库  


安装express 插件

    npm install express jade moment mongoose
如果出现异常，单个安装：

    npm install express
    npm install jade 
    npm install mongoose
    npm install bower -g 
    npm install underscore
    npm install body-parser
    bower install bootstrap
注意：bower 需要使用用到git



http://www.cnblogs.com/linjiqin/p/3192159.html  
Windows7下安装MongoDB

把mongodb 安装成windows 服务  

    mongod.exe --install --logpath=D:\software\MongoDB2.6\log\log.txt --dbpath=D:\software\MongoDB2.6\data\db

    net start mongodb    // 启动mongodb服务
    net stop mongodb	// 启动mongodb服务


mogondb 命令行：

    mongo
    use imooc
    db.movies.find({})
    db.movies.find({}).count()
    db.movies.remove()


mongon 三种模型：  

+ Schema 模式  
+ Model 模型  
+ Document 文档  




生成安装配置文件：

    bower init	// 生成前端配置文件
    npm init	// 生成后端依赖配置文件




在命令行中，传入初始化参数：

    var express = require('express');
    var port = process.env.PORT || 3000;            // 从命令行中传入的参数
    
    
    // 打印命令行中传入的所有参数
    process.argv.forEach(function (val, index, array) {
      console.log(index + ': ' + val);
    });
    
    // 返回当前系统的环境变量信息
    console.log(JSON.stringify(process.env));
    
    // 在window 中使用:
    set PORT=4000
    node app.js
    
    npm install -g supervisor    // -g 安装到全局模式
    supervisor app.js  // 修改代码之后，不用重启node 服务器 

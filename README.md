# gulp-project
gulp+webpack+express前端工程方案
================================


*  基于gulp进行构建，方便快捷，易于定制和插件使用
*  最小化配置config.json,基于约定优于配置理念
*  静态资源增量化发布，文件名全部MD5版本化，轻松多版本发布
*  使用sass，使css模块化，使用gulp-sass编译，易于开发维护
*  使用jade，使html模块化，使用gulp-jade编译，易于开发维护
*  使用CommonJS规范，使javascript开发模块化，使用webpack编译，易于开发维护
*  使用gulp-rev,自动替换html内部资源引用路径，替换为MD5版本化路径，并生成资源文件map，便于后台发开
*  使用express启动本地server，模拟后台数据接口，前端开发时不用等待后台接口，即可跑通整个流程
*  通过browserSync,文件改动，自动刷新本地server


#
* 启动：gulp
* 发布：gulp release

配置文件：/gulpfile.js/config.json
配置详解

    {
      "root": {
        "src": "./src",//源码目录
        "dest": "./dest",//发布目录
        "data" : "./data", //数据目录
        "route" : "./routes" //路由目录
      },
    "express":{
      "port" : 8081   //数据服务端口
    },
    "tasks": {
      "browserSync":{
        "proxy" : "http://127.0.0.1:8081/__main__.html",// 数据服务地址
        "port":8082, // 本地server端口，默认5000
        "index" : "__main__.html" // html文件列表
      },
      "js": {
        "src": "js",  // js源码相对目录
        "dest": "js", // js发布相对目录
        "extractSharedJs": true, // 公共模块抽取
        "sharedJsName":"common", // 公共模块js文件名
        "extensions": ["js"]  // 文件后缀
      },
      "sprite":{
        "name":"sprite.png"   // 雪碧图文件名
      },
      "css": {
        "src": "css", // css源码相对目录
        "dest": "css",  // css发布相对目录
        "sass": {},
        "extensions": ["scss"]
      },
      "jade" : {
          "src" : "page", // html源码相对目录
          "dest" : "page", // html发布相对目录
          "jade" : {
           "pretty": true
           },
          "extensions":["jade"]
      },
      "images": {
        "src": "img",
        "dest": "img",
        "extensions": ["jpg", "png", "svg", "gif"]
      },
      "fonts": {
        "src": "fonts",
        "dest": "fonts",
        "extensions": ["woff2", "woff", "eot", "ttf", "svg"]
      },
      "iconFont": {
        "src": "icons",
        "dest": "fonts",
        "sassDest": "generated",
        "extensions": ["woff2", "woff", "eot", "ttf", "svg"]
      }
    }
    }

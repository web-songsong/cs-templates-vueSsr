# cs-templates-vueSsr模板

## 模板介绍

> 快速搭建一个以 `koa2`作为服务端框架，`vue全家桶`作前端开发框架的服务端渲染项目。

### 亮点功能

* 项目开发热更新
* 与`koa2`良好融合
* 前端项目流程基于`vue-cli3`, 过度零压力

### 目录结构

```
.
├── babel.config.js
├── index.template.html
├── package.json
├── postcss.config.js
├── server
│   ├── app.js
│   ├── router
│   ├── utils
│   └── vue-ssr
├── src
│   ├── App.vue
│   ├── assets
│   ├── components
│   ├── entry-client.js
│   ├── entry-server.js
│   ├── main.js
│   ├── modules
│   ├── router.js
│   ├── store.js
│   └── views
├── vue.config.js
└── yarn.lock
```

### 目录简介

* **server/**

  后端服务模块： 开启服务， 解析vue，暴露接口， 返回数据

  - **app.js**

    后端启动文件，`koa`框架的主文件

  * **router/** 

    定义接口，制作api，默认接口前缀 （`api`)

  * **utils/**

    工具类文件夹，后端所需的公共方法文件

  * **vue-ssr/**

    后端对接前端数据渲染以及热更新配置文件（请谨慎更改）

* **src/**

  前端开发模块： 基于vue框架开发前端代码

  * **App.vue**

    `vue`组件的主文件

  * **assets/**

    资源文件夹

  * **components/**

    `vue`公共组件管理文件夹

  * **entry-client.js**

    客户端的vue启动配置文件

  * **entry-server.js**

    服务器端的vue启动配置文件

  * **main.js**

    `vue`的入口文件，前端项目的启动文件

  * **modules/**

    管理vuex的子文件夹。

  * **router.js**

    路由主文件

  * **store.js**

    `vuex`主文件

  * **views/**

    子路由入口文件夹

* **vue.config.js**

  `vue`的配置文件，基于`vue-cli3`的配置文件



### 运行

开发环境： 

```bash
$ npm run dev
```

生产环境

```bash
$ npm start
```


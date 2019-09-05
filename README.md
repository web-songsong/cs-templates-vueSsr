# cs-templates-vueSsr模板

## 模板介绍

> 利用`node`开启服务器， 渲染前端模板， 实现ssr。 

###  目录结构

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



**server**

后端服务模块： 开启服务， 解析vue，暴露接口， 返回数据

**src**

前端开发模块： 基于vue框架开发前端代码



### 运行

开发环境： 

```bash
$ npm run dev
```

生产环境

```bash
$ npm start
```


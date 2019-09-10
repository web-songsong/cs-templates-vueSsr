const Router = require('koa-router')
let activity = new Router()
const koaBodyform = require('../../utils/koa-body-form')

/* 生成活动模板 ： /activity/generateTemplate */
activity.post('/generateTemplate', koaBodyform(), require('./generateTemplate'))

module.exports = activity

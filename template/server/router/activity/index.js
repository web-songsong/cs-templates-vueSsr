const Router = require('koa-router')
let activity = new Router()
const koaBodyform = require('../../utils/koa-body-form')

/* api test ： /activity/test */
activity.post('/test', koaBodyform(), async ctx => {
  ctx.body = '接口请求成功'
})

module.exports = activity

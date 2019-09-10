const fs = require('fs')
const path = require('path')
const exec = require('util').promisify(require('child_process').exec)

const pwdDir = path.resolve(__dirname, '../../../.temFile/')
const envFile = path.join(__dirname, '../../../.temFile/.env.local')
const globalFile = path.join(__dirname, '../../../.temFile/.global.css')
const env = { ...process.env, NODE_ENV: 'production' }

const relative = filePath => path.relative(pwdDir, filePath)

const updateTemList = async (ctx, opt, data) => {
  return await ctx.$db.template_list.updateOne(opt, data, { upsert: true })
}

const paramsInft = ctx => {
  let { name = null, list, bodyStyle } = ctx.request.body
  list = list ? JSON.parse(list) : []
  bodyStyle = bodyStyle ? JSON.parse(bodyStyle) : {}
  return { name, list, bodyStyle }
}

const formatList = (files, list) => {
  return Object.keys(files).map(imgKey => {
    const imgDir = relative(files[imgKey].path)
    const imgName = imgDir.slice(imgDir.lastIndexOf('/') + 1)
    const className = imgName.split('.')[0]
    if (imgKey === 'bodyStyleImg') {
      return {
        className: 'body',
        imgDir
      }
    }
    list[imgKey].imgClassName = className
    return {
      className,
      imgDir
    }
  })
}

const writeFile = ({ name, list, bodyStyle }, imgData) => {
  const str = `
  VUE_APP_TITLE=${name ? name : 'test'}
  VUE_APP_LIST=${JSON.stringify(list)}
  VUE_APP_BODYSTYLE=${JSON.stringify(bodyStyle)}
  `
  const styleStr = `${imgData
    .map(item => {
      return `.${item.className}{background-image:url(${item.imgDir})}`
    })
    .join('')}`
  fs.writeFileSync(envFile, str)
  fs.writeFileSync(globalFile, styleStr)
}
/**
 * 生成模板文件
 *
 * @param {*} ctx
 */
module.exports = async function generateTemplate(ctx) {
  let { name, list, bodyStyle } = paramsInft(ctx)

  await updateTemList(ctx, { name }, { name, list, bodyStyle })

  let globalStyleFiel
  ctx.request.files && (globalStyleFiel = formatList(ctx.request.files, list))
  writeFile({ name, list, bodyStyle }, globalStyleFiel)
  await exec('npm run build:spa', { env })

  ctx.body = 'test'
}

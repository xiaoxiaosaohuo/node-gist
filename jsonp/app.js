const Koa = require('koa')
const app = new Koa()
const jsonp = require('koa-jsonp')
// 使用中间件
app.use(jsonp())

app.use( async ( ctx ) => {
  
  let returnData = {
    success: true,
    data: {
      text: 'this is a jsonp api',
      time: new Date().getTime(),
    }
  }

  // 直接输出JSON
  ctx.body = returnData
})

app.listen(3000, () => {
  console.log('server is starting at port 3000')
})
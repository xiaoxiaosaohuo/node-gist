const Koa = require('koa')
const path = require('path')
const views = require('koa-views')
const static = require('koa-static')
const app = new Koa()

const { uploadFile } = require('./uploadFile')


app.use(views(path.join(__dirname,'./view'),{
  extension:'ejs'
}))

const staticPath = './static';
app.use(static(path.join(__dirname,staticPath)));

app.use( async ( ctx ) => {

  if (ctx.method === 'GET' ) {
    // 当GET请求时候返回表单页面
    const title = 'upload file';

   await ctx.render('index',{
     title
   })

  } else if ( ctx.url === '/api/upload.json' && ctx.method === 'POST' ) {
    // 上传文件请求处理
    let result = { success: false }
    let serverFilePath = path.join( __dirname, staticPath,'/image' )

    // 上传文件事件
    result = await uploadFile( ctx, {
      fileType: 'album',
      path: serverFilePath
    })

    ctx.body = result
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

app.listen(3000,()=>{
    console.log('server is running at port 3000')
})
const Koa = require("koa");
const app = new Koa();

app.use(async (ctx)=>{
    const url = ctx.url;
    const query = ctx.query;
    const queryString = ctx.querystring;
    const origin_query = ctx.request.query;
    const origin_queryString = ctx.request.querystring;
    ctx.body = {
      url,
      origin_query,
      origin_queryString,
      query,
      queryString
    };

})

app.listen(3000,()=>{
    console.log('server is starting at port 3000')
})
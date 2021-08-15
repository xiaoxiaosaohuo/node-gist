const Koa = require('koa');

const app = new Koa();

app.use(async (ctx,next)=>{
 const start = Date.now();
 console.log("before-X-Response-Time");
 await next();
 const ms = Date.now() - start;
 console.log("X-Response-Time");
 ctx.set("X-Response-Time", `${ms}ms`);

})

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log("before-logger");
  await next();
  const ms = Date.now() - start;
  console.log(`logger-${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(async(ctx)=>{
    console.log('set body')
    ctx.body = 'hello world'
    console.log("after-set--body");
})

app.listen(3000);
console.log('server is starting at port 3000')
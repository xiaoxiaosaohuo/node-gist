const Koa = require('koa');

const app = module.exports = new Koa();

app.use(async(ctx)=>{
    ctx.status = 404;
    switch(ctx.accepts('html','json')){
        case 'html':
            ctx.type = 'html';
            ctx.body = '<p>page not found</p>'
            break;
        case 'json':
            ctx.body = {
                message:'Page not found'
            }
        default:
            ctx.type = 'text';
            ctx.body = 'Page not found'
    }
})

// if (!module.parent) app.listen(3000)

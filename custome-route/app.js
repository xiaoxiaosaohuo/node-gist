const Koa = require('koa')
const fs = require("fs");
const path = require("path");
const app = new Koa();

const render = (page)=>{
    return new Promise((resolve,reject)=>{
       
        let viewUrl = `./view/${page}`
        const url = path.resolve(__dirname, viewUrl);
        fs.readFile(url, "binary", (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
    })
}
const route = async (url)=>{
    let view = '404.html'
    switch (url) {
      case "/":
        view = "index.html";
        break;
      case "/index":
        view = "index.html";
        break;
      case "/404":
        view = "404.html";
        break;
      case "/todo":
        view = "todo.html";
        break;
      default:
        view = "404.html";
        break;
    }
    const html = await render(view)
    return html;
}
app.use(async (ctx)=>{
    const url = ctx.request.url;
    const  html = await route(url)
    ctx.body = html;
})

app.listen(3000)
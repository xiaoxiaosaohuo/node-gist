const Koa = require('koa');
const auth = require("koa-basic-auth");

const app = (module.exports = new Koa());

app.use(async function(ctx, next) {
  try {
    await next();
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401;
      ctx.set("WWW-Authenticate", "Basic");
      ctx.body = "cant haz that";
    } else {
      throw err;
    }
  }
});

app.use(auth({ name: "aa", pass: "bb" }));

// secret response

app.use(async function(ctx) {
  ctx.body = "base auth";
});
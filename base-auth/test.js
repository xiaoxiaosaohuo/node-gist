const app = require("./app");
const request = require("supertest");

let server;

beforeAll(() => {
  server = app.listen(8081);
  return server;
});

afterAll(done => {
  server.close();
  done();
});

test("with no credentials",async ()=>{
    const res = await request(server).get('/')
    expect(res.status).toBe(401)
});

test("with invalid credentials", async () => {
  const res = await request(server)
    .get("/")
    .auth("user", "invalid password");
  expect(res.status).toBe(401);
});
test("with valid credentials", async () => {
  const res = await request(server)
    .get("/")
    .auth("aa", "bb")
    expect(res.status).toBe(200);
    expect(res.text).toBe("base auth");
});



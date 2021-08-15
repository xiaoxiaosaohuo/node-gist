const app = require('./app');
const request = require('supertest')

let server;

beforeAll(() => {
  server = app.listen(8081);
  return server;
});

afterAll((done) => {
  server.close();
  done();
});

test("when GET /", async () => {
    const response = await request(server).get('/');
    expect(response.status).toEqual(404);
    expect(response.status).toBe(404);
    expect(response.text).toBe('<p>page not found</p>');
});

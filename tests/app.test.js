const request = require('supertest');
const app = require('../src/app');

describe('Testando a rota raiz "/"', () => {
  it('deve retornar 200 e a mensagem "Hello, world!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, world!');
  });
});

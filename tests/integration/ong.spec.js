const request = require('supertest');
const app = require('../../src/app');
const conection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await conection.migrate.rollback();
    await conection.migrate.latest();
  });

  afterAll( async () => {
    await conection.destroy();
  });

  it('shonld be able to create a ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "TESTE",
        email: "teste@gmail.com",
        whatsapp: "63900000000",
        city: "Plamas",
        uf: "TO",
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});

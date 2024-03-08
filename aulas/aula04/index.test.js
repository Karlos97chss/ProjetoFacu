const app = require('./index');
const supertest = require('supertest');

const request = supertest(app);

test('Deve retornar 200 no GET', async function(){
    const response = await request.get('/');
    expect(response.status).toBe(200);
})
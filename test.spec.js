const request = require('supertest');
const app = require('./app');

describe('Successful Response', () => {
  it('Should return valid user structure for ID 1', async () => {
    const res = await request(app).get('/users/1');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('email');
    expect(res.body).toHaveProperty('address');
    expect(res.body).toHaveProperty('company');
    expect(res.body).toHaveProperty('preferences');
  });
});

describe('Error Responses', () => {
  const codes = [204, 403, 404, 502];

  codes.forEach((code) => {
    it(`Should handle ${code} error`, async () => {
      const res = await request(app).get(`/users/${code}`);
      expect(res.status).toBe(code);
      if (code !== 204) {
        expect(res.body).toHaveProperty('error');
        expect(res.body).toHaveProperty('details');
      }
    });
  });
});
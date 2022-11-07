const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('owners routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('GET /owners should return the list of owners and their pets', async () => {
    const resp = await request(app).get('/owners');
    expect(resp.status).toBe(200);
    expect(resp.body.length).toBe(6);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      pets: expect.any(Array),
    });
  });

  it('GET /owners/:id should return an individual owner and their pets', async () => {
    const resp = await request(app).get('/owners/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      pets: expect.any(Array),
    });
  });
  afterAll(() => {
    pool.end();
  });
});

const request = require('supertest');

const app = require('..');

describe('Demo test', () => {
  it('should respond to index route', (done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(err).toBeNull();
        expect(res.status).toBe(200);
        expect(res.text).toEqual(expect.stringContaining('Express API'));
        done();
      });
  });
});


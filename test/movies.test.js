const chai = require('chai');
const supertest = require('supertest');

const { expect } = chai;
const api = supertest('http://localhost:5000/api/v1');

describe('GET /movies', () => {
  it('Fetch movies', () => {
    api
      .get('/movies')
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        const movies = res.body;
        expect(movies).to.be.a('array');
        expect(movies[0]).to.have.property('title');
      });
  });
});

describe('POST /movies', () => {
  it('Add new movie', () => {
    api
      .post('/movies')
      .set('Accept', 'application/json')
      .send({
        title: 'Guardians of the Galaxy Vol. 2'
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then(res => {
        const { movie } = res.body;
        expect(movie).to.be.a('object');
        expect(Object.keys(movie).length).to.equal(27);
      });
  });

  it('Add comment with invalid format of movie title', () => {
    api
      .post('/movies')
      .set('Accept', 'application/json')
      .send({
        title: 'This is a wrong movie title'
      })
      .expect('Content-Type', /json/)
      .expect(400)
      .then(res => {
        const { body } = res;
        expect(body).to.be.a('object');
        expect(body).to.have.all.keys('error', 'messege');
      });
  });
});

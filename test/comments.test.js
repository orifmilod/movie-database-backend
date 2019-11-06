const chai = require('chai');
const supertest = require('supertest');

const api = supertest('http://localhost:5000/api/v1');
const { expect } = chai;

describe('GET /comments', () => {
  it('Fetch comments', () => {
    api
      .get('/comments')
      .set('Accept', 'application/json')
      .expect(200)
      .then(res => {
        const comments = res.body;
        expect(comments).to.be.a('array');
        expect(comments[0]).to.have.all.keys(
          '_id',
          'movieID',
          'comment',
          '__v'
        );
      });
  });
});

describe('POST /comments', () => {
  it('Add new comment', () => {
    api
      .post('/comments')
      .set('Accept', 'application/json')
      .send({
        movieTitle: 'Guardians of the Galaxy Vol. 2',
        comment: 'Really cool movie!!!'
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then(res => {
        const { result } = res.body;
        expect(result).to.be.a('object');
        expect(result).to.have.all.keys('_id', 'movieID', 'comment', '__v');
      });
  });

  it('Add comment with invalid format of movie title', () => {
    api
      .post('/comments')
      .set('Accept', 'application/json')
      .send({
        movieTitle: 'This is a wrong movie title',
        comment: 'Really cool movie!!!'
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

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../../server')

describe('routes : GetPosts', () => {
    describe('GET /api/v1/posts', () => {
        it('should return all posts from blogger', (done) => {
            chai.request(app)
            .get('/api/v1/posts')
            .end((err, res) => {
                should.not.exist(err)
                res.redirects.length.should.equal(0);
                res.status.should.equal(200);
                res.type.should.equal('application/json');
                res.body.should.include.keys('posts', 'status')
                res.body.status.should.equal('success')
                done();
            })
        })
        // it('should not return current conditions for a invalid location', (done) => {
        //     chai.request(app)
        //     .get('/api/v1/posts')
        //     .send({
        //         location: '$'
        //     })
        //     .end((err, res) => {
        //         should.exist(err);
        //         res.status.should.equal(500);
        //         res.type.should.equal('application/json');
        //         res.body.status.should.equal('error');
        //         done();
        //     })
        // })
    })
})

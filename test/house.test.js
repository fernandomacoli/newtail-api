let mongoose = require("mongoose");
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

describe('Houses', () => {

    describe('/GET Houses', () => {
        it('Testando GET todas os Houses', (done) => {
            chai.request('http://localhost:3000')
                .get('/house')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('/GET/:id House', () => {
        it('GET em House por ID', (done) => {
            let id_ = "5f5788c2ce450ef9a46f2c0b";
            chai.request('http://localhost:3000')
                .get('/house/' + id_)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });

        });
    });

    describe('/GET/name/:name House', () => {
        it('Busca em House por NAME', (done) => {
            let name = "House Algood";
            chai.request('http://localhost:3000')
                .get('/house/name/' + name)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('name').eql(name);
                    done();
                });

        });
    });

    describe('/Delete House', () => {
        it('Deleta uma House', (done) => {
            let house = {
                id: "5f5788c2ce450ef9a46f2c0b",
            }
            chai.request('http://localhost:3000')
                .delete('/house/')
                .send(house)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });

    });
});
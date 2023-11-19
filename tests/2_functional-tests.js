const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

const expect = chai.expect;

suite('Functional Tests', function() {
    suite("GET API test", function () {

        test("Convert a valid input such as 10L: GET request to /api/convert", function (done) {
            chai.request(server)
                .get('/api/convert')
                .query({ input: "10L" })
                .end(function(err, res) {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200)

                    assert.equal(res.body.initNum, 10)
                    assert.approximately(res.body.returnNum, 2.64172, 0.1)

                    done();
                });
        });

        test("Convert an invalid input such as 32g: GET request to /api/convert.", function (done) {
            chai.request(server)
                .get('/api/convert')
                .query({ input: "32g" })
                .end(function (err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    expect(res.body).to.equal("invalid unit")

                    done();
                });
        });

        test("Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert", function (done) {
            chai.request(server)
                .get('/api/convert')
                .query({ input: "3/7.2/4kg" })
                .end(function(err, res) {
                    expect(err).to.be.null
                    expect(res).to.have.status(200)
                    expect(res.body).to.equal("invalid number")

                    done();
                });
        });

        


    })
});

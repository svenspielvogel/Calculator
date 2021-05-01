const supertest = require("supertest");
const app = require("../index");

describe("POST /", function () {
  it("it should return status code 200 when result is 4 for 2 + 2", function (done) {
    supertest(app)
      .post("/add")
      .send({ num1: 2, num2: 2 })
      .expect(200)
      .expect({ result: 4 })
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
  it("it shoud return status code 200 when result is 3 for 5 - 2", function (done) {
    supertest(app)
      .post("/subtract")
      .send({ num1: 5, num2: 2 })
      .expect(200)
      .expect({ result: 3 })
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
  it("it shoud return status code 200 when result is 10 for 5 * 2", function (done) {
    supertest(app)
      .post("/multiply")
      .send({ num1: 5, num2: 2 })
      .expect(200)
      .expect({ result: 10 })
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
  it("it shoud return status code 200 when result is 3 for 6 / 2", function (done) {
    supertest(app)
      .post("/divide")
      .send({ num1: 6, num2: 2 })
      .expect(200)
      .expect({ result: 3 })
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});

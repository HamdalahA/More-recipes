'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.Should();
_chai2.default.use(_chaiHttp2.default);

describe('More Recipes', function () {
  it('should get the home page', function (done) {
    _chai2.default.request(_app2.default).get('/api').end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });

  it('should return 200 for get request', function (done) {
    _chai2.default.request(_app2.default).post('/api/recipes').end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });

  it('should return 200 for delete request', function (done) {
    _chai2.default.request(_app2.default).delete('/api/recipes').end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });

  it('should return 200 for put request', function (done) {
    _chai2.default.request(_app2.default).add('/api/recipes').end(function (err, res) {
      res.should.have.status(200);
      done();
    });
  });
});
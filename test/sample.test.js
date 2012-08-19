var should = require('should');

describe('Calculator', function() {
  describe('足し算', function() {
    it('1 + 1 は 2になること', function() {
      var res = 1 + 1;
      res.should.be.equal(2);
    });

    it('1 + (-20)は -19 になること', function() {
      var res = 1 + (-20) + 1;
      res.should.be.equal(-19);
    });
  });

  describe('引き算', function() {
    it('20 - 2 は 18になること', function() {
      var res = 20 - 2;
      res.should.be.equal(18);
    });
  });

});

describe('Array', function() {
  describe('インスタンス生成', function() {
    var arr = new Array();

    it('サイズが０であること', function() {
      arr.should.have.length(0);
    });
    it('中身が空であること',function() {
      arr.should.be.empty;
    });
  });

});


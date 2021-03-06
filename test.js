var unqid = require('./index.js');
var expect = require('chai').expect;

describe('tests for generating unique ids', function() {
  it('should return unique id with prefix', function() {
    expect(unqid('sample_')).to.be.eql('sample_1');
    expect(unqid('sample_')).to.be.eql('sample_2');
    expect(unqid('sample_')).to.be.eql('sample_3');
  });

  it('should return unique id without prefix', function() {
    expect(unqid()).to.be.eql('4');
    expect(unqid()).to.be.eql('5');
    expect(unqid()).to.be.eql('6');
  });
});

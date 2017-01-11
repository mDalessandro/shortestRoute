let expect = require('chai').expect;
let fakeData = require('./fakeData.js');
let short = require('../shortestRoute.js'); 

describe('arrayToObj', function () {
  it('should be a function', function(done) {
    expect(short.arrayToObj).to.be.a('function');
    done();
  });
  
  it('should correctly convert the an array to an object usable by shortestRoute', function(done) {
    expect(short.arrayToObj(fakeData.citiesArr)).to.eql(fakeData.cities);
    done();
  });
});

describe('shortestRoute', function() {
  it('should be a function', function(done) {
    expect(short.shortestRoute).to.be.a('function');
    done();
  });
  
  it('should return the proper value when the start and end are the same', function(done) {
    expect(short.shortestRoute(fakeData.cities, 'Boston', 'Boston')).to.eql(['Boston']);
    done();
  });

  it('should return the shortest route when there exists multiple possible routes', function(done) {
    expect(short.shortestRoute(fakeData.cities, 'Boston', 'Philadelphia')).to.eql(['Boston', 'New York', 'Philadelphia']);
    done();
  })
});

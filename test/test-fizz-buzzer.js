require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// multiple tests are being run for the single fizzBuzzer entity
describe('fizzBuzzer', function() {
  it('should return fizz-buzz with input divisible by 15', function() {
    fizzBuzzer(30).should.equal('fizz-buzz');
  });

  it('should return buzz with input divisible by 5 but not by 15', function() {
    fizzBuzzer(10).should.equal('buzz');
  });

  it('should return fizz with input divisible by 3 but not by 15', function() {
    fizzBuzzer(12).should.equal('fizz');
  });

  // looping through normal cases in single test statement
  it('should return the expected string based on normal input', function() {

    const normalCases = [
      {input: 30, expectedResult: 'fizz-buzz'},
      {input: 10, expectedResult: 'buzz'},
      {input: 12, expectedResult: 'fizz'}
    ];

    normalCases.forEach(function(testCase) {
      fizzBuzzer(testCase.input).should.equal(testCase.expectedResult);
    });

  });

  it('should throw an error if input is a string', function() {

    // test a single non-number case
    (function() {
      fizzBuzzer('12')
    }).should.throw(Error);

  });

  it('should throw an error if input is either a stirng, boolean, object, array, null or undefined', function() {

    const errorCases = [
      true,
      {},
      null,
      undefined,
      'ourString'
    ];

    errorCases.forEach(function(testCase) {
      (function() {
        fizzBuzzer(testCase)
      }).should.throw(Error);
    });

  });
});

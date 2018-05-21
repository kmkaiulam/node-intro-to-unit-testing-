//import chai
const expect = require('chai').expect;

//import fizzbuzzer

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {
    it('should return \'fizz-buzz\' for num divisible by 15', function() {
      const fizzBuzzCase = [15,30,45];
        fizzBuzzCase.forEach(function(input) { 
        expect(fizzBuzzer(input)).to.equal('fizz-buzz');
      });
    });
  
    it('should return \'buzz\' for num divisible by 5', function() {
      
      const buzzCases = [5, 10, 20];
      buzzCases.forEach(function(num) {
        expect(fizzBuzzer(num)).to.equal('buzz');
      });
    });
        
    it('should return \'fizz\' for num divisible by 3', function () {
        const fizzCases = [3, 6, 9, 12];
        fizzCases.forEach(function(num) {
            const answer = fizzBuzzer(num);
            expect(answer).to.equal('fizz');
    });
  })
    it('should return a number for values not divisible by 3 or 5', function (){ 
        const numCases = [1, 2, 4, 7];
        numCases.forEach(function(num) {
            expect(fizzBuzzer(num)).to.equal(num)
        });
    });
    it('should throw an error if input is not a number', function (){ 
        const badInputs = [true, false, 'hi', {}, [1, 2, 3]];
        badInputs.forEach(function(num){
            expect(fizzBuzzer(num));
        }).to.throw(Error);
     });
    });

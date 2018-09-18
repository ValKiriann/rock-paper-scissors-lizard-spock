var assert = chai.assert;
describe('botMove', function() {
    describe('We test each condition 4 times the number of movements to test the randomness condition', function() {
        for(let i=0;i< movements.length * 4;i++){
            var result = botMove();
            describe('The result is ' + result, function() {
                it('should return a number greater or equal to 0.', function() {
                    assert.isAtLeast(result, 0);
                });
                it('should return a number at most the length of the movements -1 to respect the zero index', function() {
                    assert.isAtMost(result, movements.length -1 );
                });
                it('should return a number that is an index in the movements array', function() {
                    assert.containsAllKeys(movements, result, 'This number is not an index of the array')
                });
            });
        }
    });
});

describe('resolve', function() {
    for(let i = 0; i < movements.length; i++){
        describe(movements[i], function() {
            for(let j = 0; j < movements.length; j++){
                if(winnings["M" + i].includes(j)){
                    it('should return win when fighting against ' + movements[j], function() {
                        assert.strictEqual(resolve(i,j), 'win' );
                    });
                } else if(i === j){
                    it('should return tie when fighting against himself', function() {
                        assert.strictEqual(resolve(i,j), 'tie' );
                    });
                }else {
                    it('should return lose when fighting against ' + movements[j], function() {
                        assert.strictEqual(resolve(i,j), 'lose' );
                    });
                }
            }
        });
    }
  });
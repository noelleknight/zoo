(function() {
  'use strict';

  var assert = chai.assert;

  suite( 'Cheetah', function() {

    test('Cheetah has animal prototype and and babies/age methods', function(){

      var speedy = new window.zoo.Cheetah('Speedy', 1990);

      assert.ok(speedy, 'Speedy exists');
      assert.ok( speedy instanceof window.zoo.Cheetah, 'Cheetah objects are from Animal');
      assert.strictEqual( speedy.name, 'Speedy', 'the name should be assigned to object');
      // assert.strictEqual( speedy.age(), '26', 'birthday is assigned to object' );
      // assert.strictEqual( speedy.babyCheetah(), 'Merl', 'baby is assigned to object' );
      // assert.strictEqual( speedy.spots(), '103', 'spots are assigned to object' );

    });

    test('age method works as expected', function(){

      var speedy = new window.zoo.Cheetah('Speedy', 1990);

      assert.strictEqual(speedy.age(), 26 , 'age exists');

    });





// 'Merl', 103
});
})();

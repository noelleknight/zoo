(function() {
  'use strict';

  var assert = chai.assert;

  suite( 'Cheetah', function() {

    test('Cheetah has animal prototype and and babies/age methods', function(){

      var speedy = new window.zoo.Cheetah('Speedy', 1990);

      assert.ok(speedy, 'Speedy exists');
      assert.ok( speedy instanceof window.zoo.Cheetah, 'Cheetah objects are from Animal');
      assert.strictEqual( speedy.name, 'Speedy', 'the name should be assigned to object');
    });

    test('age method works as expected', function(){

      var rolf = new window.zoo.Cheetah('Rolf', 2011);

      assert.strictEqual(rolf.age(), 5 , 'age exists');
    });

    test('birth and spots method work as expected', function(){

      var merl = new window.zoo.Cheetah('Merl', 2005);

      assert.strictEqual(merl.birth('Kyle'), 'Merl had a baby named, Kyle');
      assert.strictEqual(merl.spots(3), 30, 'spots method returns correct value');
    });
    test('spots method throws error when input is not a number', function(){

      var doris = new window.zoo.Cheetah('Doris', 1999);

      try{
        assert.strictEqual(doris.spots("hello"),"hello", 'this should not work');
      } catch(err) {
        assert.strictEqual(err.message, 'Please enter a number!');
      }
    });
    test('birth method throws error when babyname is not a string', function(){

      var doris = new window.zoo.Cheetah('Doris', 1999);

      try{
        assert.strictEqual(doris.birth(false),"false", 'this should not work');
      } catch(err) {
        assert.strictEqual(err.message, 'This should be a stringy type of thing!');
      }
    });
  });

})();

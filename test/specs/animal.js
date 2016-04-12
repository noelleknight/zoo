(function() {
  'use strict';

  var assert = chai.assert;

  suite( 'Animal', function() {

    test('the zoo namespace exists', function(){
      assert.ok(window.zoo, 'the namespace exists');
    });

    test('create animal with proper args', function(){

      var liger = new window.zoo.Animal('Liger', 1988);

      assert.ok(liger, 'liger exists');
      assert.ok( liger instanceof window.zoo.Animal, 'animal objects are from Animal');
      assert.strictEqual( liger.name, 'Liger', 'the name should be assigned to object');
    });

    test('age method works as expected', function(){

      var liger = new window.zoo.Animal('Liger',1988);

      assert.strictEqual(liger.age(), 28 , 'age exists');
    });

    test('expire method throws error', function(){

      var python = new window.zoo.Animal('Python', 2010);
      python.expire();

      try{
        assert.strictEqual(python.age(), 6, 'this will produce an error');
      }
      catch(err) {
        assert.strictEqual(err.message, 'This animal is expired, therefore ageless.', 'python is dead');
      }
    });
    test('animal constructor throws error when args type is incorrect', function(){

      var python = new window.zoo.Animal(12, 2010);

      try{
        assert.strictEqual(python.name(12), 12, 'this will produce an error');
      }
      catch(err) {
        assert.strictEqual(err.message, 'You are putting in the wrong type of value');
      }
  });
  });

})();

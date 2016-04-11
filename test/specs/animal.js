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


      // assert.ok(bob, 'bob exists');
      // assert.ok( bob instanceof window.work.Person, 'person objects are from Person');
      // assert.strictEqual( bob.salary, 30000, 'the salary should be assigned to object' );
      //
      // bob.raise(10);
      //
      // assert.strictEqual(bob.salary, (30000 * 1.1), 'ensure correct salary after raise');
    });
  });

})();

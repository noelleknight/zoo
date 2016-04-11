(function() {
  'use strict';

  var assert = chai.assert;

  suite( 'WhaleShark', function() {

    test('the zoo namespace exists', function(){
      assert.ok(window.zoo, 'the namespace exists');
    });

    test('Whaleshark has animal prototype and eggs method', function(){

      var bruce = new window.zoo.WhaleShark('Bruce', 1997);

      assert.ok(bruce, 'bruce exists');
      assert.ok( bruce instanceof window.zoo.WhaleShark, 'WhaleShark objects are from Whaleshark');
      assert.strictEqual( bruce.name, 'Bruce', 'the name should be assigned to object');
      assert.strictEqual(bruce.toString(), 'Bruce,1997', 'toString returns correct ');
      assert.isAbove(bruce.eggs(), 0, 'returned number of eggs');
      assert.isBelow(bruce.eggs(), 301, 'returned number of eggs within math random parameters');

    });

    test('Whaleshark has origin method and correct return value', function(){

      var bruce = new window.zoo.WhaleShark('Bruce', 1997);
      
      assert.typeOf( bruce.origin(), 'string', 'origin returns primitive');
      // assert.strictEqual( bruce.origin(), 'Caribbean' || 'Pacific' || 'Atlantic', 'origin returns correct value');


    });

  });

})();

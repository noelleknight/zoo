(function(ns) {
  'use strict';

  var placesOfOrigin = ['Caribbean', 'Pacific', 'Atlantic'];

  ns.WhaleShark = function WhaleShark(name, birthday) {

    ns.Animal.call(this, name, birthday);
  };

  ns.WhaleShark.prototype = Object.create(ns.Animal.prototype);
  ns.WhaleShark.prototype.constructor = ns.WhaleShark;

  ns.WhaleShark.prototype.eggs = function eggs (){
    return( Math.floor(Math.random() * 300) + 1);
  };

  ns.WhaleShark.prototype.toString = function toString(){
    return this.name + ',' + this.birthday;
  };

  ns.WhaleShark.prototype.origin = function origin() {
    return (placesOfOrigin[Math.floor(Math.random() * placesOfOrigin.length)]);
  };


  window.zoo = ns;

})(window.zoo || {});

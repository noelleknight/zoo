(function(ns) {
  'use strict';

  ns.Cheetah = function Cheetah(name, birthday, stridesHr) {

    ns.Animal.call(this, name, birthday);
  };

  ns.Cheetah.prototype = Object.create(ns.Animal.prototype);
  ns.Cheetah.prototype.constructor = ns.Cheetah;

  ns.Cheetah.prototype.stridesHr = stridesHr;


  // ns.WhaleShark.prototype.origin = function origin() {
  //   return (placesOfOrigin[Math.floor(Math.random() * placesOfOrigin.length)]);
  // };


  window.zoo = ns;

})(window.zoo || {});

(function(ns) {
  'use strict';

  ns.Cheetah = function Cheetah(name, birthday) {

    ns.Animal.call(this, name, birthday);

    this.babyCheetah = [];
  };

  ns.Cheetah.prototype = Object.create(ns.Animal.prototype);
  ns.Cheetah.prototype.constructor = ns.Cheetah;

  // ns.Cheetah.prototype.haveBabies = function haveBabies(babyname) {
  //   var kate = new ns.Cheetah( babyname);
  //   return (this.babyCheetah.push( kate ));
  // };

  // ns.Cheetah.prototype.spots = function spots(numberOfSpots){
  //
  //   this.spots = numberOfSpots;
  // };

  // ns.Cheetah.prototype.toString = function toString(){
  //   return this.name + ', ' + this.birthday + ', ' + this.babyCheetah + ', ' + this.spots;
  // };

  window.zoo = ns;

})(window.zoo || {});

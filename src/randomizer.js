module.exports = (function (){
  function Randomizer(values){
    this.values = values; //values should be an array of say... cities
  }

  Randomizer.prototype.sayHello = function (){
    return 'hello'
  }

  //roll as in roll the dice
  Randomizer.prototype.roll = function (){
  	var rand = this.values[Math.floor(Math.random() * this.values.length)];
  	return rand;
  }

  return Randomizer
})()

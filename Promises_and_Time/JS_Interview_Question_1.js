//Question : Implement a custom forEach loop

//For this can we access the prototype of the array and add a function

Array.prototype.customForEach = function(callback) {
  for(let i =0; i<this.length; i++){
      callback(this[i], i, this)
  }
}

//a little advanced level

Array.prototype.advancedCustomForEach = functin(callback, thiscontext){
  if(typeOf callback !== 'function'){
    throw `This is not a function`
  }
  const length = this.length;
  let i = 0;
  while(i < length){
    if(this.hasOwnProperty){
      callback.call(thiscontext, this[i], i, this)
    }
  i++
  } 
}

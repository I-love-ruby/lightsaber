
var calculator = {
  add: function (x,y){
    return x + y;
  },

  subtract: function(x,y) {
    return x - y;
  },

  multiply: function(x,y) {
    return x * y;
  },
  divide: function(x,y) {
    if (y===0) {
      return "Should not be zero."
    }
    else {
      return x / y;
    }
  }
};
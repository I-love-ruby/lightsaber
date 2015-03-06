describe("calculator", function() {
  it("should add two numbers", function() {
    var x = 500;
    var y =100;
    expect(calculator.add(x,y)).toEqual(600);
  });

  it("should subtract two numbers", function() {
    var x = 500;
    var y = 100;
    expect(calculator.subtract(x,y)).toEqual(400)
  });

  it("should multiply two numbers", function() {
    var x = 500;
    var y = 100;
    expect(calculator.multiply(x,y)).toEqual(50000)
  });

  it("should divide two numbers", function() {
    var x = 500;
    var y = 100;
    expect(calculator.divide(x,y)).toEqual(5)
  });
});
class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.outputValue = initialValue.toString();
  }

  add(number) {
    // your implementation
    this.outputValue+= " + " + number;
    return this;
  }
  
  subtract(number) {
    // your implementation
    this.outputValue+= " - " + number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.outputValue+= " * " + number;
    return this;
  }

  devide(number) {
    // your implementation
    this.outputValue+= " / " + number;
    return this;
  }

  pow(number) {
    // your implementation
    this.outputValue+= " ** " + number;
    return this;
  }
  valueOf(){
    return eval(this.outputValue);
  }
}

module.exports = SmartCalculator;

import React from 'react';

export default class ExpressionWithOneOperator {

  constructor() {
    let operators = ["+", "-", "X"];
    this.operator=  operators[parseInt(3 * Math.random())];
    switch(this.operator){
      case "+":
        this.input1 = this.randomBy(0,13);
        this.input2 = this.randomBy(0,13);
        this.result = this.input1+this.input2;
        break;
      case "-":
        this.input1 = this.randomBy(10,20);
        this.input2 = this.randomBy(1,10);
        this.result = this.input1-this.input2;
        break;
      case "X":
        this.input1 = this.randomBy(1,3);
        this.input2 = this.randomBy(1,9);
        this.result = this.input1*this.input2;
        break;
      default:
        console.log("impossible operator");
        break;
    }
  }

  randomBy(lower, higher) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * lower + 1);
      case 2:
        if (higher < lower) {
          let tmp = higher;
          higher = lower;
          lower = tmp;
        }
        return parseInt(Math.random() * (higher - lower + 1) + lower);
      default:
        return 0;
    }
  }
}
import React from 'react';

export default class ExpressionWithOneOperator {

  constructor(operators) {
    this.operator = operators[parseInt(operators.length * Math.random())];
    switch(this.operator){
      case "+":
    	let p1 = this.randomBy(0,10);
    	let p2 = this.randomBy(0,10);
    	if(p1+p2>10){
    		if(p1<p2){
    			let tmp = p1;
    			p1=p2;
    			p2=tmp;
    		}
    		this.input1 = p1-p2;
    		this.input2 = p2;
    		this.result = p1;
    	} else {
          this.input1 = p1
          this.input2 = p2;
          this.result = this.input1+this.input2;
    	}
        break;
      case "-":
    	let m1 = this.randomBy(1,10);
    	let m2 = this.randomBy(1,10);
        if (m1 >= m2) {
          this.input1 = m1;
          this.input2 = m2;
        } else {
          this.input1 = m2;
          this.input2 = m1;
        }
        this.result = this.input1 - this.input2;
        break;
      case "X":
        this.input1 = this.randomBy(1,9);
        this.input2 = this.randomBy(1,9);
        this.result = this.input1*this.input2;
        break;
      case "÷":
    	  let d1 = this.randomBy(1,9);
    	  let d2 = this.randomBy(1,9);
          this.input1 = d1 * d2;
          this.input2 = d1;
          this.result = d2;
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
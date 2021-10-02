import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CALCULATOR';

  num1=0;
  num2=0;
  result=0;


  getNum1(value: string) {
    this.num1 = parseInt(value);

    if (!isNaN(this.num1)) {
      console.log(this.num1);
    }
  }

  getNum2(value: string) {
    this.num2 = parseInt(value);

    if (!isNaN(this.num2)) {
      console.log(this.num2);
    }
  }

  add() {
    this.result = this.num1 + this.num2;
    console.log(this.result); 
  }

  subtract() {
    this.result = this.num1 - this.num2;
    console.log(this.result);
  }

  multiply() {
    this.result = this.num1 * this.num2;
    console.log(this.result);
  }

  divide() {
    this.result = this.num1 / this.num2;
    console.log(this.result);
  }
}


 



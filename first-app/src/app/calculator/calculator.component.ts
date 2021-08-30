import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  n1 : number = 0;
  n2 : number = 0;
  result : number = 0;

  setN1(value : string){
    this.n1 = parseInt(value);
  }

  setN2(value : string){
    this.n2 = parseInt(value);
  }


  constructor() { }

  ngOnInit(): void {
  }

  onAddClick(){
    this.result = this.n1 + this.n2;
  }
  onSubtractClick(){
    this.result = this.n1 - this.n2;
  }
  onMultiplyClick(){
    this.result = this.n1 * this.n2;
  }
  onDivideClick(){
    this.result = this.n1 / this.n2;
  }

}

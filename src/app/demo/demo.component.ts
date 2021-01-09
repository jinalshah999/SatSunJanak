import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  // template: ` <h1>I am from demo component</h1> `,
})
export class DemoComponent implements OnInit {
  a: number = 10;
  name: string = 'jinal';
  flag: boolean = false;
  xyz: number = 100;
  no1: number = 0;
  no2: number = 0;
  ans: number = 0;
  res: number = 0;
  numberArr: number[] = [10, 20, 30, 40, 50];
  constructor() {}

  ngOnInit(): void {}
  onClick(): void {
    alert('button pressed');
  }
  onAddClick(): void {
    this.ans = this.no1 + this.no2;
  }
  onAdd1Click(val1, val2) {
    this.res = parseInt(val1) + parseInt(val2);
  }
  onToggelClick() {}
}

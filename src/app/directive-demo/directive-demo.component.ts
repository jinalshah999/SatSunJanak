import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css'],
})
export class DirectiveDemoComponent implements OnInit {
  xyz: string = 'yellow';
  constructor() {}

  ngOnInit(): void {}
}

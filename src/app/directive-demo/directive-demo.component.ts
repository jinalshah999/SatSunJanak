import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css'],
})
export class DirectiveDemoComponent implements OnInit {
  xyz: string = 'yellow';
  @ViewChild('ptag') patg: any;
  constructor() {}

  ngOnInit(): void {}
}

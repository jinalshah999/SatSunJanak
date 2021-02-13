import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() categoryfromparent: string = '';
  @Output() myevent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onSearchClick(value: string) {
    console.log('I am from child', value);
    this.myevent.emit(value);
  }
}

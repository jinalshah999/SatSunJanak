import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
})
export class HighlighterDirective {
  bgColor: string;
  @Input('temp') color: string = 'red';
  constructor() {}
  @HostListener('mouseenter') mouseover() {
    this.bgColor = this.color;
  }
  @HostListener('mouseleave') mouseleave() {
    this.bgColor = 'white';
  }
  @HostBinding('style.background-color') get setColor1() {
    return this.bgColor;
  }
}

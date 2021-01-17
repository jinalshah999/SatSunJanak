import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditcard]',
})
export class CreditcardDirective {
  // constructor(private element: ElementRef) {
  //   console.log(this.element);
  // }

  constructor() {}

  @HostListener('input', ['$event']) onkeyup(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 16);
    }

    let number = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      number.push(trimmed.substr(i, 4));
    }
    input.value = number.join(' ');
  }
}

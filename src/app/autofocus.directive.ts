import {Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective {


  constructor(private element:ElementRef){

  }

  @HostListener('onload') onClick() {
    window.alert('Host Element Clicked');
 }

}

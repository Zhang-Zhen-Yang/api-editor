import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDisplayWiewHost]'
})
export class DisplayWiewHostDirective {

  constructor( public viewContainerRef:ViewContainerRef ) { }

}

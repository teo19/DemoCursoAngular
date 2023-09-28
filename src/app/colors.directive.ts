import { Directive, Renderer2, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Directive({
  selector: '[demoColors]'
})
export class ColorsDirective {

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private breakPointObserver: BreakpointObserver) {
    this.breakPointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      if (result.matches){
        if(result.breakpoints['(max-width: 599.98px)']){
          renderer.setStyle(el.nativeElement, 'color', 'red');
        } else if (result.breakpoints['(min-width: 600px) and (max-width: 959.98px)']){
          renderer.setStyle(el.nativeElement, 'color', 'orange');
        }
      } else {
        renderer.setStyle(el.nativeElement, 'color', 'blue');
      }
    });
  }

}

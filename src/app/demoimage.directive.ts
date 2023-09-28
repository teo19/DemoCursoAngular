import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[demoDemoimage]'
})
export class DemoimageDirective {

  @Input() imgDefault: string;
  constructor(private el: ElementRef) {    
  }

  @HostListener('error')
  onError(): void {
    this.el.nativeElement.src = this.imgDefault ? this.imgDefault : 'https://media.istockphoto.com/id/1359484449/vector/img-album.jpg?s=612x612&w=0&k=20&c=huHLbKk8Pcbi1bm0531SY6TNkavic7-nXYPmUajJg2E='
  }

}

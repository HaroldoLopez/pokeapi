import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBarwidth]'
})
export class BarwidthDirective {

  @Input('appBarwidth') width:String = ""
  // element:any

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log("directive");
    console.log(Number(this.width));
    const value = (Number(this.width)*100)/180
    console.log(value);
    this.el.nativeElement.style.width = value+"px";
  }

}
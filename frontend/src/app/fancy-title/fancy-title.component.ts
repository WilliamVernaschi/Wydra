import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fancy-title',
  templateUrl: './fancy-title.component.html',
  styleUrls: ['./fancy-title.component.scss'],
})
export class FancyTitleComponent {

  @ViewChild('text') titleElement!: ElementRef;
  @Input({required: true}) color!: string;
  constructor() { }

}

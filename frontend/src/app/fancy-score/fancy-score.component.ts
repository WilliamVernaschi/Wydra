import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fancy-score',
  templateUrl: './fancy-score.component.html',
  styleUrls: ['./fancy-score.component.scss'],
})
export class FancyScoreComponent  implements OnInit {

  constructor() { }
  @Input() size : string = '64px';

  ngOnInit() {}

}

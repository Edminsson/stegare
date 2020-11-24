import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { StegComponent } from '../steg/steg.component';


@Component({
  selector: 'app-stegare',
  templateUrl: './stegare.component.html',
  styleUrls: ['./stegare.component.scss']
})
export class StegareComponent implements OnInit {
  @ContentChildren(StegComponent, {descendants: true}) steps: QueryList<StegComponent>;
  selectedIndex = 0;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('FÖRSTA STEGET - content', this.steps.first.content);
    }, 1000);
  }

}

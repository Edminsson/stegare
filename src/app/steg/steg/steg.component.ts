import { Component, OnInit, ViewChild, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-steg',
  templateUrl: './steg.component.html',
  styleUrls: ['./steg.component.scss']
})
export class StegComponent implements OnInit {
  @ViewChild(TemplateRef, {static: true}) content: TemplateRef<any>;
  completed = false;
  optional = false;
  constructor() { }

  ngOnInit(): void {
  }

  select(): void {
    console.log('Select was called');
  }

}

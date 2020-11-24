import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vybarn',
  templateUrl: './vybarn.component.html',
  styleUrls: ['./vybarn.component.scss']
})
export class VybarnComponent {
  @ViewChild(TemplateRef, {static: true}) content: TemplateRef<any>;
}

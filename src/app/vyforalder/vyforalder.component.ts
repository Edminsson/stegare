import { CdkStepLabel } from '@angular/cdk/stepper';
import { Component, ContentChild, ContentChildren, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { DirreDirective } from '../dirre.directive';
import { PointlessComponent } from '../pointless/pointless.component';
import { VybarnComponent } from '../vybarn/vybarn.component';

@Component({
  selector: 'app-vyforalder',
  templateUrl: './vyforalder.component.html',
  styleUrls: ['./vyforalder.component.scss']
})
export class VyforalderComponent {
  @ContentChild(CdkStepLabel) stepLabel: CdkStepLabel;
  @ContentChild(DirreDirective) dirren: DirreDirective;
  @ContentChild(PointlessComponent) poanglos: PointlessComponent;
  @ContentChild('innehallsbarn') innehallsbarn: any;
  @ContentChildren(VybarnComponent, {descendants: true}) barn: QueryList<VybarnComponent>;
  constructor() { }

  logga(): void {
    console.log('StepLabel', this.stepLabel);
    console.log('Content', this.barn.first.content);
    console.log('Innehållsbarn', this.innehallsbarn);
    console.log('Pointless', this.poanglos);
    console.log('Dirre', this.dirren);
  }

}


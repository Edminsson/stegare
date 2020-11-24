import { Component, OnInit } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'app-basic-stepper',
  templateUrl: './basic-stepper.component.html',
  styleUrls: ['./basic-stepper.component.scss'],
  providers: [{provide: CdkStepper, useExisting: BasicStepperComponent}]
})
export class BasicStepperComponent  extends CdkStepper implements OnInit {
  ngOnInit(): void {
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
    console.log('CONTENT', this.selected.content);
  }
}

@Component({
  selector: 'app-enkel-steppis',
  template: `
  <app-basic-stepper>
    <cdk-step> <p>This is any content of "Step 1"</p> </cdk-step>
    <cdk-step> <p>This is any content of "Step 2"</p> </cdk-step>
  </app-basic-stepper>
  `
})
export class EnkelSteppisComponent {}

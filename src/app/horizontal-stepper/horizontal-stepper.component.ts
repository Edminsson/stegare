import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { MatHorizontalStepper, MatStep, MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-horizontal-stepper',
  templateUrl: './horizontal-stepper.component.html',
  styleUrls: ['./horizontal-stepper.component.scss'],
  providers: [
    { provide: MatHorizontalStepper, useExisting: HorizontalStepperComponent},
    { provide: MatStepper, useClass: MatStepper},
    { provide: CdkStepper, useClass: CdkStepper},
    { provide: MatStep, useClass: MatStep},

  ]
})
export class HorizontalStepperComponent extends MatHorizontalStepper implements OnInit {
  ngOnInit(): void {
    console.log('hej', this);
  }

}


import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HorizontalStepperComponent } from '../horizontal-stepper/horizontal-stepper.component';

@Component({
  selector: 'app-pro-stepper',
  templateUrl: './pro-stepper.component.html',
  styleUrls: ['./pro-stepper.component.scss']
})
export class ProStepperComponent implements OnInit, AfterViewInit {
  @ViewChild('stepper') myStepper: HorizontalStepperComponent;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  innehall: any;


  constructor(private formBuilder: FormBuilder) {}

  ngAfterViewInit(): void {
    // debugger;
    console.log('Stepper Content ', this.myStepper.steps.first.content);
    setTimeout(() => {
      this.innehall = this.myStepper.steps.first.content;
      console.log('Innehall', this.innehall);
    }, 0);
  }

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
  }


}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ProStepperComponent } from './pro-stepper/pro-stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HorizontalStepperComponent } from './horizontal-stepper/horizontal-stepper.component';
import { VybarnComponent } from './vybarn/vybarn.component';
import { PointlessComponent } from './pointless/pointless.component';
import { DirreDirective } from './dirre.directive';
import { BasicStepperComponent, EnkelSteppisComponent } from './basic-stepper/basic-stepper.component';
import { VyforalderComponent } from './vyforalder/vyforalder.component';
import { StegareComponent } from './steg/stegare/stegare.component';
import { StegComponent } from './steg/steg/steg.component';
import { SteghuvudComponent } from './steg/steghuvud/steghuvud.component';

@NgModule({
  declarations: [
    AppComponent,
    ProStepperComponent,
    HorizontalStepperComponent,
    VybarnComponent,
    PointlessComponent,
    DirreDirective,
    BasicStepperComponent,
    EnkelSteppisComponent,
    VyforalderComponent,
    StegareComponent,
    StegComponent,
    SteghuvudComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

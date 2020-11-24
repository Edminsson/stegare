import { Component, OnInit, AfterViewInit, OnDestroy, Input, TemplateRef, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { StegComponent } from '../steg/steg.component';

export type StepState = 'number'|'edit'|'done'|'error'|string;

@Component({
  selector: 'app-steghuvud',
  templateUrl: './steghuvud.component.html',
  styleUrls: ['./steghuvud.component.scss']
})

export class SteghuvudComponent implements AfterViewInit, OnDestroy {
  /** State of the given step. */
  @Input() state: StepState;

  /** Label of the given step. */
  @Input() label: TemplateRef<any> | string;

  /** Error message to display when there's an error. */
  @Input() errorMessage: string;

  /** Index of the given step. */
  @Input() index: number;

  /** Whether the given step is selected. */
  @Input() selected: boolean;

  /** Whether the given step label is active. */
  @Input() active: boolean;

  /** Whether the given step is optional. */
  @Input() optional: boolean;

  /** Whether the ripple should be disabled. */
  @Input() disableRipple: boolean;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }

  /** Returns string label of given step if it is a text label. */
  _stringLabel(): string | null {
    return this.label instanceof TemplateRef ? null : this.label;
  }

  /** Returns MatStepLabel if the label of given step is a template label. */
  _templateLabel(): TemplateRef<any> | null {
    return this.label instanceof TemplateRef ? this.label : null;
  }

  /** Returns the host HTML element. */
  _getHostElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  _getDefaultTextForState(state: StepState): string {
    if (state === 'number') {
      return `${this.index + 1}`;
    }
    if (state === 'edit') {
      return 'create';
    }
    if (state === 'error') {
      return 'warning';
    }
    return state;
  }
}

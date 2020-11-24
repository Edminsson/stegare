import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyforalderComponent } from './vyforalder.component';

describe('VyforalderComponent', () => {
  let component: VyforalderComponent;
  let fixture: ComponentFixture<VyforalderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VyforalderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VyforalderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

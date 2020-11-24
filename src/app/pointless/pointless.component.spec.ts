import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointlessComponent } from './pointless.component';

describe('PointlessComponent', () => {
  let component: PointlessComponent;
  let fixture: ComponentFixture<PointlessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointlessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VybarnComponent } from './vybarn.component';

describe('VybarnComponent', () => {
  let component: VybarnComponent;
  let fixture: ComponentFixture<VybarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VybarnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VybarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

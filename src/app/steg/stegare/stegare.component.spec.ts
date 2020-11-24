import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StegareComponent } from './stegare.component';

describe('StegareComponent', () => {
  let component: StegareComponent;
  let fixture: ComponentFixture<StegareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StegareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StegareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

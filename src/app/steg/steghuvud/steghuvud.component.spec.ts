import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteghuvudComponent } from './steghuvud.component';

describe('SteghuvudComponent', () => {
  let component: SteghuvudComponent;
  let fixture: ComponentFixture<SteghuvudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteghuvudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteghuvudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

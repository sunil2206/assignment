import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleInputComponent } from './middle-input.component';

describe('MiddleInputComponent', () => {
  let component: MiddleInputComponent;
  let fixture: ComponentFixture<MiddleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

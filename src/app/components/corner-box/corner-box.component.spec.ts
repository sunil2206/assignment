import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerBoxComponent } from './corner-box.component';

describe('CornerBoxComponent', () => {
  let component: CornerBoxComponent;
  let fixture: ComponentFixture<CornerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CornerBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

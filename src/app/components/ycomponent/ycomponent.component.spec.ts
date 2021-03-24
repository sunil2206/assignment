import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YcomponentComponent } from './ycomponent.component';

describe('YcomponentComponent', () => {
  let component: YcomponentComponent;
  let fixture: ComponentFixture<YcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

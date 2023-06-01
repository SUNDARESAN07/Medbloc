import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccTypeComponent } from './acc-type.component';

describe('AccTypeComponent', () => {
  let component: AccTypeComponent;
  let fixture: ComponentFixture<AccTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

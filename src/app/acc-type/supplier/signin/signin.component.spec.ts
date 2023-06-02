import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SSigninComponent;
  let fixture: ComponentFixture<SSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

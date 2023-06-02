import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: CSigninComponent;
  let fixture: ComponentFixture<CSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

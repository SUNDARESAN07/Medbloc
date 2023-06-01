import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManregisterComponent } from './manregister.component';

describe('ManregisterComponent', () => {
  let component: ManregisterComponent;
  let fixture: ComponentFixture<ManregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

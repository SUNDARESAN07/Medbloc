import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmedicineDashboardComponent } from './smedicine-dashboard.component';

describe('SmedicineDashboardComponent', () => {
  let component: SmedicineDashboardComponent;
  let fixture: ComponentFixture<SmedicineDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmedicineDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmedicineDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

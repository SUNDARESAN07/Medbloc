import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerSearchComponent } from './consumer-search.component';

describe('ConsumerSearchComponent', () => {
  let component: ConsumerSearchComponent;
  let fixture: ComponentFixture<ConsumerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

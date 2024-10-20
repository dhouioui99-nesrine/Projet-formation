import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcccComponent } from './accc.component';

describe('AcccComponent', () => {
  let component: AcccComponent;
  let fixture: ComponentFixture<AcccComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcccComponent]
    });
    fixture = TestBed.createComponent(AcccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

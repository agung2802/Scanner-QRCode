import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInEmployeeComponent } from './check-in-employee.component';

describe('CheckInEmployeeComponent', () => {
  let component: CheckInEmployeeComponent;
  let fixture: ComponentFixture<CheckInEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckInEmployeeComponent]
    });
    fixture = TestBed.createComponent(CheckInEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

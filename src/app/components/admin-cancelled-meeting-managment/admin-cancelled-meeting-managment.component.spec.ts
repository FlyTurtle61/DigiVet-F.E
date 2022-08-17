import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCancelledMeetingManagmentComponent } from './admin-cancelled-meeting-managment.component';

describe('AdminCancelledMeetingManagmentComponent', () => {
  let component: AdminCancelledMeetingManagmentComponent;
  let fixture: ComponentFixture<AdminCancelledMeetingManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCancelledMeetingManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCancelledMeetingManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

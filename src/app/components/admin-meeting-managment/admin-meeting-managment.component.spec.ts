import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMeetingManagmentComponent } from './admin-meeting-managment.component';

describe('AdminMeetingManagmentComponent', () => {
  let component: AdminMeetingManagmentComponent;
  let fixture: ComponentFixture<AdminMeetingManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMeetingManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMeetingManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCanceledMeetingComponent } from './user-canceled-meeting.component';

describe('UserCanceledMeetingComponent', () => {
  let component: UserCanceledMeetingComponent;
  let fixture: ComponentFixture<UserCanceledMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCanceledMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCanceledMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

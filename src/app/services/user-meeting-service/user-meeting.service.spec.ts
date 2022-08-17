import { TestBed } from '@angular/core/testing';

import { UserMeetingService } from './user-meeting.service';

describe('UserMeetingService', () => {
  let service: UserMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

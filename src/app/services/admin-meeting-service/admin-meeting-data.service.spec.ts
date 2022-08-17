import { TestBed } from '@angular/core/testing';

import { AdminMeetingDataService } from './admin-meeting-data.service';

describe('AdminMeetingDataService', () => {
  let service: AdminMeetingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminMeetingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

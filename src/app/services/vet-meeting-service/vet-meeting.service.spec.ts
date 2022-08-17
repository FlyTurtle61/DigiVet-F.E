import { TestBed } from '@angular/core/testing';

import { VetMeetingService } from './vet-meeting.service';

describe('VetMeetingService', () => {
  let service: VetMeetingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetMeetingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

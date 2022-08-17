import { TestBed } from '@angular/core/testing';

import { MeetingCanceledService } from './meeting-canceled.service';

describe('MeetingCanceledService', () => {
  let service: MeetingCanceledService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingCanceledService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

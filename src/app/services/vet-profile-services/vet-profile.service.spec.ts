import { TestBed } from '@angular/core/testing';

import { VetProfileService } from './vet-profile.service';

describe('VetProfileService', () => {
  let service: VetProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AdminRecommendedService } from './admin-recommended.service';

describe('AdminRecommendedService', () => {
  let service: AdminRecommendedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRecommendedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

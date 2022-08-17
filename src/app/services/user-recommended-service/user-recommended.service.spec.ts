import { TestBed } from '@angular/core/testing';

import { UserRecommendedService } from './user-recommended.service';

describe('UserRecommendedService', () => {
  let service: UserRecommendedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRecommendedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

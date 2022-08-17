import { TestBed } from '@angular/core/testing';

import { AdminUserDetailsService } from './admin-user-details.service';

describe('AdminUserDetailsService', () => {
  let service: AdminUserDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUserDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CreateAdminService } from './create-admin.service';

describe('CreateAdminService', () => {
  let service: CreateAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

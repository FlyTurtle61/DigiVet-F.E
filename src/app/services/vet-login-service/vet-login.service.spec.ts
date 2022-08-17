import { TestBed } from '@angular/core/testing';

import { VetLoginService } from './vet-login.service';

describe('VetLoginService', () => {
  let service: VetLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

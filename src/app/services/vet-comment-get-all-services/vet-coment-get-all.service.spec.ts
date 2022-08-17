import { TestBed } from '@angular/core/testing';

import { VetComentGetAllService } from './vet-coment-get-all.service';

describe('VetComentGetAllService', () => {
  let service: VetComentGetAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetComentGetAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

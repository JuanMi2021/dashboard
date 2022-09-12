import { TestBed } from '@angular/core/testing';

import { DhliService } from './dhli.service';

describe('DhliService', () => {
  let service: DhliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DhliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

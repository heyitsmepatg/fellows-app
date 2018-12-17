import { TestBed } from '@angular/core/testing';

import { FellowsService } from './fellows.service';

describe('FellowsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FellowsService = TestBed.get(FellowsService);
    expect(service).toBeTruthy();
  });
});

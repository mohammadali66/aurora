import { TestBed } from '@angular/core/testing';

import { MainAuroraService } from './main-aurora.service';

describe('MainAuroraService', () => {
  let service: MainAuroraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainAuroraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

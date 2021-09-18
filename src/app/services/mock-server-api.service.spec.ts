import { TestBed } from '@angular/core/testing';

import { MockServerApiService } from './mock-server-api.service';

describe('MockServerApiService', () => {
  let service: MockServerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockServerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

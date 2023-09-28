import { TestBed } from '@angular/core/testing';

import { ApidemoService } from './apidemo.service';

describe('ApidemoService', () => {
  let service: ApidemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApidemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

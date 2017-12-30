import { TestBed, inject } from '@angular/core/testing';

import { ExpenditureServiceService } from './expenditure-service.service';

describe('ExpenditureServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpenditureServiceService]
    });
  });

  it('should be created', inject([ExpenditureServiceService], (service: ExpenditureServiceService) => {
    expect(service).toBeTruthy();
  }));
});

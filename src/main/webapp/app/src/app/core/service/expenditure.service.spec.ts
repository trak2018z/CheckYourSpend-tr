import { TestBed, inject } from '@angular/core/testing';

import { ExpenditureService } from './expenditure.service';

describe('ExpenditureServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpenditureService]
    });
  });

  it('should be created', inject([ExpenditureService], (service: ExpenditureService) => {
    expect(service).toBeTruthy();
  }));
});

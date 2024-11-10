import { TestBed } from '@angular/core/testing';

import { ProductRelatedServiceService } from './product-related-service.service';

describe('ProductRelatedServiceService', () => {
  let service: ProductRelatedServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductRelatedServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

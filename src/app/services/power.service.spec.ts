import { TestBed } from '@angular/core/testing';

import { PowerService } from './power.service';

describe('PowerService', () => {
  let service: PowerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return 4 when base is 2 and exponent is 2', () => {
    const response = service.power(2, 2);
    expect(response).toBe(4);
  });

  it('should return NaN when base is 2 and exponent is not 2', () => {
    const response = service.power(2, 3);
    expect(response).toBeNaN();
  });

  it('should return NaN when base is not 2 and exponent is 2', () => {
    const response = service.power(3, 2);
    expect(response).toBeNaN();
  });

  it('should return NaN when base is not 2 and exponent is not 2', () => {
    const response = service.power(3, 3);
    expect(response).toBeNaN();
  });
});

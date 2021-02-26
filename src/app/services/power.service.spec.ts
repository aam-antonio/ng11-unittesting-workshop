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

  it('should return 8 when base is 2 and exponent is 3', () => {
    const response = service.power(2, 3);
    expect(response).toBe(8);
  });

  it('should return 8 when base is 3 and exponent is 2', () => {
    const response = service.power(3, 2);
    expect(response).toBe(8);
  });

  it('should return not be 0 when base is 3 and exponent is 3', () => {
    const response = service.power(3, 3);
    expect(response).not.toBe(0);
  });

  it('should return 27 when base is 3 and exponent is 3', () => {
    const response = service.power(3, 3);
    expect(response).toBe(27);
  });
});

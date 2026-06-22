import { TestBed } from '@angular/core/testing';

import { AcessorioService } from './acessorio';

describe('Acessorio', () => {
  let service: AcessorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcessorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

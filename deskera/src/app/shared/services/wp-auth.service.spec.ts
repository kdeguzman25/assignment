import { TestBed } from '@angular/core/testing';

import { WpAuthService } from './wp-auth.service';

describe('WpAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WpAuthService = TestBed.get(WpAuthService);
    expect(service).toBeTruthy();
  });
});

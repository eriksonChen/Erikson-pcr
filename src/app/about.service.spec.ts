/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AboutService } from './about.service';

describe('Service: About', () => {
  beforeEach(() => {
    addProviders([AboutService]);
  });

  it('should ...',
    inject([AboutService],
      (service: AboutService) => {
        expect(service).toBeTruthy();
      }));
});

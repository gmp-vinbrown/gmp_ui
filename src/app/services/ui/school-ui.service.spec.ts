import { TestBed, inject } from '@angular/core/testing';

import { SchoolUiService } from './school-ui.service';

describe('SchoolUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolUiService]
    });
  });

  it('should be created', inject([SchoolUiService], (service: SchoolUiService) => {
    expect(service).toBeTruthy();
  }));
});

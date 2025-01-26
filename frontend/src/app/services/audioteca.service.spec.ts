import { TestBed } from '@angular/core/testing';

import { AudiotecaService } from './audioteca.service';

describe('AudiotecaService', () => {
  let service: AudiotecaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudiotecaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

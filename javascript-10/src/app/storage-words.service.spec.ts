import { TestBed } from '@angular/core/testing';

import { StorageWordsService } from './storage-words.service';

describe('StorageWordsService', () => {
  let service: StorageWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

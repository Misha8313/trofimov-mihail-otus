import { TestBed } from '@angular/core/testing';

import { StorageWordsService, Word } from './storage-words.service';

describe('StorageWordsService', () => {
  let service: StorageWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageWordsService);
  });

  beforeEach(() => {
    let store = new Map();
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return store.get(key);
      },
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getWordsFromLocalStorage should return array Word', () => {
    let stubWord: Word = { En: 'EN', Ru: 'RU' };

    localStorage.setItem('words', JSON.stringify([stubWord]));

    const storageWordsService = new StorageWordsService();

    expect(storageWordsService.getWordsFromLocalStorage()).toEqual(
      [stubWord],
      'OK'
    );
  });

  it('#addWords should add new word in array Word', () => {
    const stubWord: Word = { En: 'EN', Ru: 'RU' };
    const newWord: Word = { En: 'EN1', Ru: 'RU1' };

    localStorage.setItem('words', JSON.stringify([stubWord]));

    const storageWordsService = new StorageWordsService();
    storageWordsService.addWord(newWord);
    expect(storageWordsService.getWordsFromLocalStorage()).toEqual(
      [stubWord, newWord],
      'OK'
    );
  });
});

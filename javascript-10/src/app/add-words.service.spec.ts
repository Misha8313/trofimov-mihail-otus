import { StorageWordsService, Word } from './storage-words.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AddWordsService } from './add-words.service';
import { ResponseTranslate, TranslateService } from './translate.service';
import { Observable, of } from 'rxjs';

describe('AddWordsService', () => {
  let service: AddWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TranslateService,
        StorageWordsService,
        HttpClient,
        HttpHandler,
      ],
    });
    service = TestBed.inject(AddWordsService);
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

  it('#splitByWords', () => {
    const translateServiceSpy = jasmine.createSpyObj('TranslateService', [
      'getTranslationWord',
    ]);

    let stubValue = new Observable<ResponseTranslate>();

    stubValue = of({
      responseData: { translatedText: 'перевод', match: '99' },
    });

    let stubWordsString = 'hello world';

    const stubWords: Word[] = [
      { En: 'hello', Ru: 'перевод' },
      {
        En: 'world',
        Ru: 'перевод',
      },
    ];

    translateServiceSpy.getTranslationWord.and.returnValue(stubValue);

    const addWordsService = new AddWordsService(
      translateServiceSpy,
      new StorageWordsService()
    );
    addWordsService.splitByWords(stubWordsString);

    expect(localStorage.getItem('words')).toEqual(
      JSON.stringify(stubWords),
      'OK'
    );
  });
});

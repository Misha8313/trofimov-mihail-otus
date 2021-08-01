import { HttpClient, HttpHandler } from '@angular/common/http';
import { observable, Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';

import {
  TranslateService,
  ResponseTranslate,
  responseData,
} from './translate.service';

describe('TranslateService', () => {
  let service: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });

    service = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getTranslationWord should return translation word', () => {
    const httpClientServiceSpy = jasmine.createSpyObj('HttpClient', ['get']);

    let stubValue = new Observable<ResponseTranslate>();

    stubValue = of({
      responseData: { translatedText: 'перевод', match: '99' },
    });

    httpClientServiceSpy.get.and.returnValue(stubValue);

    const translateService = new TranslateService(httpClientServiceSpy);

    expect(translateService.getTranslationWord('translation')).toBe(
      stubValue,
      'OK'
    );
  });
});

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  constructor(private http: HttpClient) {}

  getTranslationWord(word: string) {
    console.log(
      `https://api.mymemory.translated.net/get?q=${word}&langpair=en|ru`
    );
    return this.http.get<ResponseTranslate>(
      `https://api.mymemory.translated.net/get?q=${word}&langpair=en|ru`
    );
  }
}

export interface ResponseTranslate {
  responseData: responseData;
}

export interface responseData {
  translatedText: string;
  match: string;
}

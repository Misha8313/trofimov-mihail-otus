import { AddWordsService } from './add-words.service';
import { TranslateService } from './translate.service';
import { Injectable } from '@angular/core';
import { observable, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageWordsService {
  words: Word[];

  constructor() {
    this.words = this.getWordsFromLocalStorage();
  }

  addWord(word: Word) {
    if (
      word.En.length > 0 &&
      this.words.findIndex((x) => x.En === word.En) < 0
    ) {
      this.words.push(word);

      localStorage.setItem('words', JSON.stringify(this.words));
    }
  }

  getWordsFromLocalStorage() {
    let words: Word[];
    const LocalStorageItemWord = localStorage.getItem('words');
    words =
      LocalStorageItemWord == null ? [] : JSON.parse(LocalStorageItemWord);

    return words;
  }
}

export interface Word {
  Ru: string;
  En: string;
}

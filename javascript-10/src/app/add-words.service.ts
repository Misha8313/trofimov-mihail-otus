import { TranslateService } from './translate.service';
import { Injectable } from '@angular/core';
import { StorageWordsService } from './storage-words.service';

@Injectable({
  providedIn: 'root',
})
export class AddWordsService {
  constructor(
    private translateService: TranslateService,
    private storageWordsService: StorageWordsService
  ) {}

  splitByWords(words: string) {
    words.split(' ').forEach((word) => {
      this.translateService
        .getTranslationWord(word)
        .subscribe((data) =>
          this.storageWordsService.addWord({
            En: word,
            Ru: data.responseData.translatedText
          })
        );
    });
  }
}

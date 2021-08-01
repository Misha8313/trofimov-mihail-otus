import { StorageWordsService, Word } from './../storage-words.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {
  currentWord: Word = { En: '', Ru: '' };
  translatedWord = new FormControl('');
  result: string = '';
  constructor(private storageWordsService: StorageWordsService) {
    this.currentWord = this.storageWordsService.words[this.getRandomIndex()];
    this.translatedWord.valueChanges.subscribe((x) => {
      this.result = x === this.currentWord.Ru ? 'Верно!' : '-';
    });
  }

  ngOnInit(): void {}

  nextWord(): void {
    if (this.storageWordsService.words.length > 0) {
      let prevWord: Word;
      do {
        prevWord = this.storageWordsService.words[this.getRandomIndex()];
      } while (this.currentWord.En === prevWord.En);
      this.currentWord = prevWord;
      this.translatedWord.setValue('');
      this.result = '';
    }
  }

  getRandomIndex() {
    return Math.floor(
      Math.random() * (this.storageWordsService.words.length + 1)
    );
  }
}

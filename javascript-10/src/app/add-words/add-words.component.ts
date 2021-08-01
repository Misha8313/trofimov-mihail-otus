import { TranslateService, ResponseTranslate } from './../translate.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddWordsService } from '../add-words.service';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.css'],
})
export class AddWordsComponent implements OnInit {
  words = new FormControl('');

  result: string = '';

  constructor(private addWordsService: AddWordsService) {}

  ngOnInit(): void {}

  addWords(): void {
    this.addWordsService.splitByWords(this.words.value);
    this.result = '';
  }

  clear(): void {
    this.words.setValue([]);
  }
}

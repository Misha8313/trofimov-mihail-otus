import { StorageWordsService, Word } from './../storage-words.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.css'],
})
export class ListWordsComponent implements OnInit {
  constructor(public storageWordsService: StorageWordsService) {}

  ngOnInit(): void {}
}

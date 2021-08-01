import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '../translate.service';

import { AddWordsComponent } from './add-words.component';

describe('AddWordsComponent', () => {
  let component: AddWordsComponent;
  let fixture: ComponentFixture<AddWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWordsComponent ],
      providers:[
        TranslateService, HttpClient, HttpHandler
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

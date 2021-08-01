import { ExercisesComponent } from './exercises/exercises.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListWordsComponent } from './list-words/list-words.component';
import { AddWordsComponent } from './add-words/add-words.component';

const appRoutes: Routes = [
  { path: 'list-words', component: ListWordsComponent },
  { path: 'add-words', component: AddWordsComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: '', component: ExercisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

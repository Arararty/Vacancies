import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyCardComponent } from './components/vacancy-card/vacancy-card.component';
import { VacancyInfoComponent } from './components/vacancy-info/vacancy-info.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    VacancyCardComponent,
    VacancyInfoComponent,
    MainComponent
  ],

  exports: [
    MainComponent
  ],

  imports: [
    CommonModule,
  ]
})
export class VacanciesModule { }

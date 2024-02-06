import { Component, OnInit } from '@angular/core';
import { Vacancy } from 'src/app/models/vacancies.interface';
import { GetVacanciesService } from 'src/app/services/get-vancies.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  vacancies: Vacancy[] = [];

  constructor( private getVacanciesService: GetVacanciesService) { }

  ngOnInit(): void {
    this.getVacanciesService
    .getVacancies()
    .subscribe((res: Vacancy[]) => (this.vacancies = res));
  }
}

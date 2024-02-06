import { GetVacanciesService } from './services/get-vancies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: any;

  constructor(private getVacanciesService: GetVacanciesService) {}

  ngOnInit(): void {
    this.getVacanciesService
      .getVacancies(100)
      .subscribe((res) => (this.title = res));
  }
}

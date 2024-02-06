import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Data, Vacancy } from '../models/vacancies.interface';

@Injectable({
  providedIn: 'root',
})
export class GetVacanciesService {
  vacanciesCount: number = 100;

  constructor(private httpClient: HttpClient) {}

  getVacancies(): Observable<Vacancy[]> {
    return this.httpClient
      .get<Data>(`https://api.hh.ru/vacancies?per_page=${this.vacanciesCount}`)
      .pipe(map((data: Data) => data.items));
  }

  getVacancyInfo(id: number): Observable<Vacancy> {
    return this.httpClient.get<Vacancy>(`https://api.hh.ru/vacancies/${id}`);
  }
}

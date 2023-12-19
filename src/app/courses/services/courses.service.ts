import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = 'api/courses';
  private readonly API_TEST = 'api/acourses';

  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      tap((courses) => console.log(courses))
    );
  }

  save(data: Course) {
    return this.httpClient.post<Course>(this.API, data).pipe(first());
  }

  delete(id: any){
    return this.httpClient.delete<string>(this.API, id).pipe(first());
  }
}

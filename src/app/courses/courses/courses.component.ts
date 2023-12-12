import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  displayedColumns = ['name', 'category'];
  courses: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {
    this.courses = this.coursesService.findAll();
  }

  ngOnInit(): void {

  }
}

import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent {
  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private courseService: CoursesService,
    private router: Router,
    private snackBar: MatSnackBar,
    private location: Location ) {

  }

  onSubmit(){
    this.courseService.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }

  private onSuccess(){
    this.snackBar.open('Curso salvo com sucesso!', '', { duration: 5000 });
    this.location.back();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar', '', { duration: 5000 });
    this.location.back();
  }

  onCancel(){
    this.snackBar.open('Operação cancelada', '', { duration: 2000 });
    this.location.back();
  }

}

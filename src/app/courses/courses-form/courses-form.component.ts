import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})
export class CoursesFormComponent {
  form: FormGroup;


  constructor(private formBuilder: FormBuilder, private courseService: CoursesService, private router: Router, private snackBar: MatSnackBar) {
    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });
  }

  onSubmit(){
    this.courseService.save(this.form.value)
    .subscribe(result => console.log(result), error => this.onError());
    this.router.navigate(['']);
  }

  private onError(){
    this.snackBar.open('Erro ao salvar', '', { duration: 3000 });
  }

  onCancel(){
    console.log("Cancelando...")
  }

}

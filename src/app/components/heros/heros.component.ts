import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { HerosService } from '../../services/heros/heros.service';
import { ageValidator } from '../../custom/age';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  listOfHeros: any;
  heroName: any;
  department: any;

  // userForm = new FormGroup({
  //   name: new FormControl(''),
  //   address: new FormControl(''),

  // })

  // using form builder
  userForm = this.fb.group({
    name: ['', Validators.required],
    age: [null, [Validators.required, ageValidator]],
    address: [''],
    family: this.fb.group({
      father: [''],
      mother: ['']
    })
  })

  constructor(private hero: HerosService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.listOfHeros = this.hero.getListOfHeros();
  }

  updateViaSet() {
    //setValue() update individual formControl
    this.department.setValue('kalimati');
  }

  updateViaPatch() {
    //patchValue() update form Group
    this.userForm.patchValue({
      address: 'kalimati'
    });
  }

  get userFormControl() {
    return this.userForm.controls;
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}

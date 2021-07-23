import { Component, OnInit } from '@angular/core';

import { HerosService } from '../../services/heros/heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  listOfToDos: any;

  constructor(private hero: HerosService) { }

  ngOnInit(): void {
    this.hero.getListOfToDos()
      .subscribe(response => this.listOfToDos = response);
  }

}

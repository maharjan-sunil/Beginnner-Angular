import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/heros/heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  listOfHeros: any;
  heroName: any;
  constructor(private hero: HerosService) { }

  ngOnInit(): void {
    this.listOfHeros = this.hero.getListOfHeros();
  }



}

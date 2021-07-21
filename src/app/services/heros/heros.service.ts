import { Injectable } from '@angular/core';
import { heros } from '../../mock/heros';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor() { }

  getListOfHeros() {
    return heros;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { baseUrl } from 'src/app/constant/url';
import { ToDo } from '../../model/todo';
import { Observable } from 'rxjs';
// import { heros } from '../../mock/heros';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(private http: HttpClient) { }

  getListOfToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${baseUrl}todos`);
  }
}

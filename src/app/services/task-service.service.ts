import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TASK } from '../taskint';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// http header option. Moramo deklarirati kako bi koristili request put
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TaskServiceService {

  // adresa baze podataka
  private apiUrl = 'http://localhost:3000/tasks';

  // kako bi koristili module moramo ga definirat u konstruktoru klase
  constructor(private http: HttpClient) 
  {

  } 

  // getTask funkcija poziva se za povlacenje podataka iz baze. Vraca Observable. (nesto slicno promiseu)
  getTasks(): Observable<TASK[]> 
  { 
    // vracamo http request "get". http requesti uvijek vracaju observable tip podatka.
    return this.http.get<TASK[]>(this.apiUrl); 
  }

  deleteTask(task: TASK): Observable<TASK>
  {
    // primjer http://localhost:3000/tasks/3
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.delete<TASK>(url);
    
  }

  updateTask(task: TASK): Observable<TASK>
  {

    // primjer http://localhost:3000/tasks/3
    const url = `${this.apiUrl}/${task.id}` 

    // put function ios for update // post for create
    return this.http.put<TASK>(url, task, httpOptions) 
    
  }

  addTask(task: TASK): Observable<TASK>
  {
    return this.http.post<TASK>(this.apiUrl, task, httpOptions)
  }


}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient

  ) { }

  retrieveAllTodos(username:any) {
    return this.http.get<Todo[]>(`http://localhost:8081/users/${username}/todos`);
    // console.log("Exexute hello world bean service")
  }

  deleteTodo(username: any, id: any){
    return this.http.delete(`http://localhost:8081/users/${username}/todos/${id}`)
  }
}

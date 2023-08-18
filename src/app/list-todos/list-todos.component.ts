import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from 'src/services/data/todo-data.service';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate: Date
  )
  {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  // for multiple todos
  todos:Todo[]  | undefined
  message: string   | undefined
  // = [
  //   new Todo(1, 'Learn to Java', false, new Date()),
  //   new Todo(2, 'Learn to Angular', false, new Date()),
  //   new Todo(3, 'Become a  Expert in Spring boot', false, new Date())
  //   // { id: 1, description: 'Learn to Java' },
  //   // { id: 2, description: 'Learn to Angular' },
  //   // { id: 3, description: 'Learn to Spring boot' }
  // ]
  // For single todo
  // todo = {
  //     id: 1,
  //     description: 'Learn to Java'
  // }
  // = [
  //   new Todo(1, 'Learn to Java', false, new Date()),
  //   new Todo(2, 'Learn to Angular', false, new Date()),
  //   new Todo(3, 'Become a  Expert in Spring boot', false, new Date())
  //   // { id: 1, description: 'Learn to Java' },
  //   // { id: 2, description: 'Learn to Angular' },
  //   // { id: 3, description: 'Learn to Spring boot' }
  // ]
  // For single todo
  // todo = {
  //     id: 1,
  //     description: 'Learn to Java'
  // }

  // = [
  //   new Todo(1, 'Learn to Java', false, new Date()),
  //   new Todo(2, 'Learn to Angular', false, new Date()),
  //   new Todo(3, 'Become a  Expert in Spring boot', false, new Date())
  //   // { id: 1, description: 'Learn to Java' },
  //   // { id: 2, description: 'Learn to Angular' },
  //   // { id: 3, description: 'Learn to Spring boot' }
  // ]
  // For single todo
  // todo = {
  //     id: 1,
  //     description: 'Learn to Java'
  // }

  // = [
  //   new Todo(1, 'Learn to Java', false, new Date()),
  //   new Todo(2, 'Learn to Angular', false, new Date()),
  //   new Todo(3, 'Become a  Expert in Spring boot', false, new Date())
    
    
  //   // { id: 1, description: 'Learn to Java' },
  //   // { id: 2, description: 'Learn to Angular' },
  //   // { id: 3, description: 'Learn to Spring boot' }
  // ]
  // For single todo
  // todo = {
  //     id: 1,
  //     description: 'Learn to Java'
  // }
  constructor(
    private todoService:TodoDataService,
    private router : Router
    ) 
    { }
  
  ngOnInit() {
    this.refreshTodos();
  }
  refreshTodos(){
    this.todoService.retrieveAllTodos('Ragini').subscribe(
      response=>{
        console.log(response);
        this.todos=response;
      }
    )
  }

  deleteTodo(id:any){
    console.log(`Delete todo ${id}`)
    this.todoService.deleteTodo('Ragini', id).subscribe(
      response=>{
      console.log(response);
      this.message=`Delete of Todo ${id} Successfully!!`;
      this.refreshTodos();
    } 
    )
  }
  updateTodo(id:any){
    console.log(`Update todo ${id}`)
    this.router.navigate(['todos', id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }
}

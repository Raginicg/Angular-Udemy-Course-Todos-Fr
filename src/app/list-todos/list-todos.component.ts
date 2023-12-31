import { Component, OnInit } from '@angular/core';

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
  todos = [
    new Todo(1, 'Learn to Java', false, new Date()),
    new Todo(2, 'Learn to Angular', false, new Date()),
    new Todo(3, 'Become a  Expert in Spring boot', false, new Date())
    
    
    // { id: 1, description: 'Learn to Java' },
    // { id: 2, description: 'Learn to Angular' },
    // { id: 3, description: 'Learn to Spring boot' }
  ]
  // For single todo
  // todo = {
  //     id: 1,
  //     description: 'Learn to Java'
  // }
  constructor() { }
  ngOnInit() {

  }
}

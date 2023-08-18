import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from 'src/services/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
  id!: number
  todo!: Todo
  router: any;
  constructor(
    private todoService: TodoDataService,
    private route:ActivatedRoute
  ){
  }

  ngOnInit()
  {
    this.id=this.route.snapshot.params['id'];
    this.todo=new Todo(this.id, '', false, new Date);
    
    if(this.id!=-1){
      // update todo
      this.todoService.retrieveTodo('Ragini',this.id )
      .subscribe(
        data=> this.todo=data
      )
    }
    
  }
  saveTodo() {
    if(this.id===-1){
      // create todo
      this.todoService.createTodo('Ragini',this.todo)
      .subscribe(
        data=>
        {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }else{
      this.todoService.updateTodo('Ragini', this.id, this.todo)
      .subscribe(
        data=>
        {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    } 
}
}



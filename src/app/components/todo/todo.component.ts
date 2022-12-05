import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todos.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  title = '';
  description = '';


  todos: ITodo[]=[{
    title:'angular',
    description:'write the tasks'
  }]
  constructor() { }

  ngOnInit(): void {
  }

  add() {

    if (this.title === '' || this.description === '') {
      return
    }
    const todo: ITodo = {
      title: this.title,
      description: this.description,
    }
    this.todos.push(todo);
    this.title = '';
    this.description = ''

  }
}

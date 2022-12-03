import { Component} from '@angular/core';
import { ITodos } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todos.service';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodosComponent {
    description = '';
    title = '';
    public todos!: ITodos[];

    constructor(private todosService: TodoService) {
        this.todos = this.todosService.todos;

    }

    add() {
        if (this.title === '' || this.description === '') {
            return
        }
        const todo: ITodos = {
            title: this.title,
            description: this.description,
        }
        this.todos.push(todo);
        this.title = '';
        this.description = ''
    }

}
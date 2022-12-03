import { Component, Input } from "@angular/core";
import { ITodos } from "src/app/models/todo.interface";

@Component({
    selector:'app-todo',
    templateUrl:'./todo.component.html',
    styleUrls:['./todo.component.css']
})
export class TodoComponent{
    @Input()todo!:ITodos

}
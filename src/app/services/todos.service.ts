import { Injectable } from "@angular/core";
import { ITodos } from "../models/todo.interface";

@Injectable({
    providedIn:'root'
})
export class TodoService{
    todos:ITodos[]=[
        {
            title:'angular',
            description:'homework'
        }
    ]
}
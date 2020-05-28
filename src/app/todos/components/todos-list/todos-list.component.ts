import { GetTodos, SetSelectedTodo } from '@store/todos.actions';
import { Todo } from '@serverAPI/todos/interface/todo.interface';
import { TodosState } from '@store/todos.state';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  @Select(TodosState.getTodoList) todos$: Observable<Todo[]>; //guardo en todos lo que halla en el listado


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTodos());
  }

  onEdit(todo: Todo): void {
    this.store.dispatch(new SetSelectedTodo(todo));   //setea el todo
  }

}

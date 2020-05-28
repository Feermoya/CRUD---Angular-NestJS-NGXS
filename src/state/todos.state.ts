import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';

import { tap } from "rxjs/operators";

import { TodoService } from '@app/todos/services/todo.service';
import { Todo } from '@serverAPI/todos/interface/todo.interface';
import { GetTodos, AddTodo, UpdateTodo, DeleteTodo, SetSelectedTodo } from './todos.actions';
import { ServerTransferStateModule } from '@angular/platform-server';
//maneja los cambios, controla los estados

export class TodosStateModel {
  public todos: Todo[];
  public selectedTodo: Todo;

}

@State<TodosStateModel>({
  name: 'todos',
  defaults: {
    todos: [],
    selectedTodo: null,
  },
})

@Injectable()
export class TodosState {

  constructor(private readonly todoSvc: TodoService) {

  }

  //saca una parte del state, para poder realizar alguna accion
  @Selector()       //recupera todos los todos
  public static getTodoList({ todos }: TodosStateModel) {
    return todos;
  }

  @Selector()     //recupera el todo seleccionado
  public static getSelectedTodo({ selectedTodo }) {
    return selectedTodo;
  }

  @Action(GetTodos)
  getTodos({ getState, setState }: StateContext<TodosStateModel>) {
    return this.todoSvc.getAll().pipe(
      tap((todos) => {
        const state = getState();
        setState({ ...state, todos });
      })
    );
  }


  @Action(AddTodo)
  addTodo({ getState, patchState }: StateContext<TodosStateModel>,
    { payload }: AddTodo) {
    return this.todoSvc.addTodo(payload).pipe(
      tap((todo) => {
        const state = getState();
        patchState({
          todos: [...state.todos, todo],
        });
      })
    );
  }


  @Action(UpdateTodo)
  updateTodo({ getState, setState }: StateContext<TodosStateModel>,
    { id, payload }: UpdateTodo) {
    return this.todoSvc.UpdateTodo(id, payload).pipe(
      tap((todo: Todo) => {
        const state = getState();   //obtengo el state
        const newState = state.todos.filter(todo => todo._id != id);//creo un nuevo state
        setState({ ...state, todos: [...newState, todo] });//seteo el nuevo state
      })
    );
  }


  @Action(DeleteTodo)
  deleteTodo({ getState, patchState }: StateContext<TodosStateModel>,
    { id }: DeleteTodo) {
    return this.todoSvc.deleteTodo(id).pipe(
      tap(() => {
        const state = getState();
        const newState = state.todos.filter(todo => todo._id != id);
        patchState({
          ...state.todos,
          todos: [...newState]
        });
      })
    )
  }


  @Action(SetSelectedTodo)
  setSelectedTodo({ getState, setState }: StateContext<TodosStateModel>,
    { payload }: SetSelectedTodo) {
    const state = getState();
    setState({
      ...state,
      selectedTodo: payload,
    });
  }







}

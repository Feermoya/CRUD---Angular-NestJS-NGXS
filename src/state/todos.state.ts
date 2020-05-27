import { Todo } from '@serverAPI/todos/interface/todo.interface';
import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetTodos, AddTodo, UpdateTodo, DeleteTodo, SetSelectedTodo } from './todos.actions';

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
    //call servicves
    return;
  }

  @Action(AddTodo)
  addTodo({ getState, patchState }: StateContext<TodosStateModel>,
    { payload }: AddTodo) {
    //call servicves
    return;
  }


  @Action(UpdateTodo)
  updateTodo({ getState, setState }: StateContext<TodosStateModel>,
    { id, payload }: UpdateTodo) {
    //call servicves
    return;
  }


  @Action(DeleteTodo)
  deleteTodo({ getState, setState }: StateContext<TodosStateModel>,
    { id }: DeleteTodo) {
    //call servicves
    return;
  }


  @Action(SetSelectedTodo)
  setSelectedTodo({ getState, patchState }: StateContext<TodosStateModel>,
    { payload }: SetSelectedTodo) {
    //call servicves
    return;
  }







}

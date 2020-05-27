import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { TodosAction } from './todos.actions';

export class TodosStateModel {
  public items: string[];
}

const defaults = {
  items: []
};

@State<TodosStateModel>({
  name: 'todos',
  defaults
})
@Injectable()
export class TodosState {
  @Action(TodosAction)
  add({ getState, setState }: StateContext<TodosStateModel>, { payload }: TodosAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}

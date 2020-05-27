import {Todo} from "@serverAPI/todos/interface/todo.interface";

export class GetTodos {  //eventos que desencadenan algo
  static readonly type = '[Todos] Get';
}


export class AddTodos {
  static readonly type = '[Todos] Add';
  constructor(public payload: Todo) { }
}

export class UpdateTodos {
  static readonly type = '[Todos] Update';
  constructor(public id: string, public payload: Todo) { }
}


export class DeleteTodos {
  static readonly type = '[Todos] Delete';
  constructor(public id: string) { }
}


export class SetSelectedTodo {  //Cuando haga click en un todo
  static readonly type = '[Todos] Set';
  constructor( public payload: Todo) { }
}

import { UtilsService } from './../services/utils.service';
import { SetSelectedTodo } from './../../../state/todos.actions';
import { TodosState } from '@store/todos.state';
import { AddTodo, UpdateTodo } from '@store/todos.actions';
import { Todo } from '@serverAPI/todos/interface/todo.interface';
import { Store, Select } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms"
import { Observable } from 'rxjs';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Select(TodosState.getSelectedTodo) selectedTodo$: Observable<Todo>;

  public todoForm: FormGroup;
  public editTodo = false;


  constructor(private fb: FormBuilder, private store: Store, private utilsSvc: UtilsService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.selectedTodo$.subscribe((todo) => {
      if (todo) {
        this.refillForm(todo);
        this.editTodo = true;
      }
    })
  }

  onSave(todo: Todo): void {
    if (this.editTodo) {
      //editando
      this.store.dispatch(new UpdateTodo(todo._id, todo));
    } else {
      //new
      this.store.dispatch(new AddTodo(todo));
    }
    this.resetForm();
    this.utilsSvc.showForm(false);
    this.store.dispatch(new SetSelectedTodo(null));
  }

  private resetForm(): void {
    this.todoForm.reset();
  }

  private createForm(): void {
    this.todoForm = this.fb.group({
      _id: [''],
      name: [''],
      completed: ['false'],
    })
  }

  private refillForm(todo: Todo) {//me llena el formulario
    this.todoForm.patchValue({
      _id: todo._id,
      name: todo.name,
    });
  }

}

import { FormComponent } from '@shared/form/form.component';
import { TodosListComponent } from '@app/todos/components/todos-list/todos-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TodosListComponent, FormComponent],
  imports: [
    CommonModule
  ],
  exports: [TodosListComponent, FormComponent],

})
export class HomeModule { }

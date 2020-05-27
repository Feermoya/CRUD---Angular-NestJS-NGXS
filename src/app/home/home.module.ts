import { HeaderComponent } from '@shared/header/header.component';
import { FormComponent } from '@shared/form/form.component';
import { TodosListComponent } from '@app/todos/components/todos-list/todos-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TodosListComponent, FormComponent, HeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [TodosListComponent, FormComponent, HeaderComponent],

})
export class HomeModule { }

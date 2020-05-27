import { CreateTodoDto } from './dto/create-todo';
import { Todo } from '@serverAPI/todos/interface/todo.interface';
import { TodosService } from '@serverAPI/todos/todos.service';
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('todos')
export class TodosController {

  constructor(private todosSvc: TodosService) { }

  @Get()
  async all(): Promise<Todo[]> {
    return this.todosSvc.all();

  }

  @Post()
  async add(@Body() todo: CreateTodoDto): Promise<Todo> {       //recivo un todo
    return this.todosSvc.add(todo);
  }

  @Put(':id')       //decoro la ruta, recivo un id
  async update(@Param('id') id: string,     //lo que viene x parametro lo extraigo
    @Body() todo: CreateTodoDto): Promise<Todo> {   //recupero el todo
    return this.todosSvc.update(id, todo);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Todo> {
    return this.todosSvc.delete(id);
  }

}

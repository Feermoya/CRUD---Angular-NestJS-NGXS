import { Todo } from '@serverAPI/todos/interface/todo.interface';
import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { CreateTodoDto } from '@serverAPI/todos/dto/create-todo';

@Injectable()
export class TodosService {

  constructor(@InjectModel('Todo') private readonly todoModel: Model<any>) {

  }

  async all(): Promise<Todo[]> {
    return this.todoModel.find();
  }

  async add(todo: CreateTodoDto): Promise<Todo> {
    const createTodo = new this.todoModel(todo)
    return createTodo.save();
  }


  async update(id: string, todo: CreateTodoDto): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(id, todo, { new: true });
  }

  async delete(id: string): Promise<Todo> {
    return this.todoModel.findByIdAndDelete(id);
  }

}

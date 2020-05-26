import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('todos')
export class TodosController {

  @Get()
all(): string {
  return 'ALL TODOS';

}

@Post()
add(){
  return 'New Todo';
}

@Put()
update(){
  return 'updated Todo';
}

@Delete()
delete(){
  return 'deleted Todo';
}

}

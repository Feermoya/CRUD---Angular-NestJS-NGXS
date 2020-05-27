import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { AppServerModule } from '../src/main.server';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/fullStackNgxs/browser')
    }),
    MongooseModule.forRoot(`mongodb://localhost:27017/todos_crud`, {
      userNewUrlParse:true,
      userUnifiedTopology:true
    }),
    TodosModule
  ],
})
export class AppModule {}

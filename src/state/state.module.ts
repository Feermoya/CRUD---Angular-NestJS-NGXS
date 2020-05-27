import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import { NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin"
import { NgxsModule } from '@ngxs/store';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([],{}),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
})
export class StateModule { }

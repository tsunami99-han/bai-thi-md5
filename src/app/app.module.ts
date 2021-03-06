import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { CreatComponent } from './component/creat/creat.component';
import { EditComponent } from './component/edit/edit.component';
import { DeleteComponent } from './component/delete/delete.component';
import { DetailComponent } from './component/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreatComponent,
    EditComponent,
    DeleteComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

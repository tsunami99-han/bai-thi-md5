import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./component/list/list.component";
import {CreatComponent} from "./component/creat/creat.component";

const routes: Routes = [{
  path: 'list',
  component: ListComponent
},{
  path:'create',
  component: CreatComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

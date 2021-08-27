import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./component/list/list.component";
import {CreatComponent} from "./component/creat/creat.component";
import {EditComponent} from "./component/edit/edit.component";

const routes: Routes = [{
  path: 'list',
  component: ListComponent
},{
  path:'create',
  component: CreatComponent
},{
  path: 'edit/:id',
  component: EditComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

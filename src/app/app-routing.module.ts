import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./component/list/list.component";
import {CreatComponent} from "./component/creat/creat.component";
import {EditComponent} from "./component/edit/edit.component";
import {DeleteComponent} from "./component/delete/delete.component";

const routes: Routes = [{
  path: 'list',
  component: ListComponent
},{
  path:'create',
  component: CreatComponent
},{
  path: 'edit/:id',
  component: EditComponent
},{
  path: 'delete/:id',
  component: DeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

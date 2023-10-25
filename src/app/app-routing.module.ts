import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphViewComponent } from './graph-view/graph-view.component';
import { ListViewComponent } from './list-view/list-view.component';

const routes: Routes = [
  { path: 'graph-view', component: GraphViewComponent },
  { path: 'list-view', component: ListViewComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

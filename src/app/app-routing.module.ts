import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageEighteenComponent } from './page-eighteen/page-eighteen.component';
import { PageSixToEightComponent } from './page-six-to-eight/page-six-to-eight.component';
import { PageTwentySevenComponent } from './page-twenty-seven/page-twenty-seven.component';
import { PageTwentySixComponent } from './page-twenty-six/page-twenty-six.component';

const routes: Routes = [
  { path: 'page-eighteen', component: PageEighteenComponent },
  { path: 'page-six-to-eight', component: PageSixToEightComponent },
  { path: 'page-twenty-seven', component: PageTwentySevenComponent },
  { path: 'page-twenty-six', component: PageTwentySixComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

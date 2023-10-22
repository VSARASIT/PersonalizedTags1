import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageSixToEightComponent } from './page-six-to-eight/page-six-to-eight.component';
import { PageEighteenComponent } from './page-eighteen/page-eighteen.component';
import { PageTwentySixComponent } from './page-twenty-six/page-twenty-six.component';
import { PageTwentySevenComponent } from './page-twenty-seven/page-twenty-seven.component'; 

@NgModule({
  declarations: [
    AppComponent,
    PageSixToEightComponent,
    PageEighteenComponent,
    PageTwentySixComponent,
    PageTwentySevenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

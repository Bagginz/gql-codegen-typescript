import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GraphQLModule } from './gql.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

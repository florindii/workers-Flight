import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { WorkerListComponent } from './worker-list/worker-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';import { WorkerItemComponent } from './worker-item/worker-item.component';



@NgModule({
  declarations: [
    AppComponent,
    WorkerListComponent,
    WorkerItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

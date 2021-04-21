import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WorkerItemComponent } from './worker-item/worker-item.component';
import { WorkerListComponent } from './worker-list/worker-list.component';

const routes: Routes = [
  {path: '', component: WorkerListComponent,pathMatch:'full' },
  {path: 'worker-list/:id', component: WorkerListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

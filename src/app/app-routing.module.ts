import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from "./components/main-page/main-page.component";
import {ListViewComponent} from './components/list-view/list-view.component';
import {TaskResultComponent} from './components/task-result/task-result.component';

const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'list', component: ListViewComponent },
    { path: 'result', component: TaskResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

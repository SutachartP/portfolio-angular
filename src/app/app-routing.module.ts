import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './feature/contact/contact.component';
import { ProjectComponent } from './feature/project/project.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }, {
    path: 'project',
    component: ProjectComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from 'src/services/route-guard.service';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

// Welcome
const routes: Routes = [
  {
    // default path---> canActivate, RouteGuard
    path:'',
    component:LoginComponent,
    
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'welcome/:name',
    component:WelcomeComponent,
    canActivate:[RouteGuardService]
  },
  {
    path:'todos',
    component:ListTodosComponent,
    canActivate:[RouteGuardService]
  },
  {
    path:'logout',
    component:LogoutComponent,
    canActivate:[RouteGuardService]
  },
  {
    path:'todos/:id',
    component:TodoComponent,
    canActivate:[RouteGuardService]
  },

  // last sentance dur to ** means anything rather then ablove
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

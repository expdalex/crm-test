import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  //{path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '', loadChildren: './auth/auth.module#AuthModule'},
  
  {path: 'system', loadChildren: './system/system.module#SystemModule'},
  {path: '**', component: NotFoundComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'user', loadChildren: './user/user.module#UserPageModule' },
  { path: 'find', loadChildren: './find/find.module#FindPageModule' },
  { path: 'coustomer', loadChildren: './coustomer/coustomer.module#CoustomerPageModule' },
  { path: 'tag', loadChildren: './tag/tag.module#TagPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

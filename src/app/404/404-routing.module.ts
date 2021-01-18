import { TornaLoginComponent } from './torna-login/torna-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: 'torna-login',
      component: TornaLoginComponent,
      children: [
        { path: 'torna-login',
          component: TornaLoginComponent,
          pathMatch: 'full'
        }
      ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TornaLoginRoutingModule {
}

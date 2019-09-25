import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParlamentarComponent} from './component/parlamentar/parlamentar.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '',  redirectTo: 'parlamentares', pathMatch: 'prefix' },
      {path: 'paralmentares', component: ParlamentarComponent},
      {path: 'parlamentar/:id', component: ParlamentarComponent},
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParlamentarComponent} from '../../component/parlamentar/parlamentar.component';
import {AppRoutingModule} from '../../app-routing.module';

@NgModule({
  declarations: [
    ParlamentarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    ParlamentarComponent
  ]
})
export class ParlamentarModule { }

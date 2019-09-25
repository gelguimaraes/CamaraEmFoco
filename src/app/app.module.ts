import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ParlamentarModule} from './module/parlamentar/parlamentar.module';
import {DespesaModule} from './module/despesa/despesa.module';
import {ParlamentarService} from './services/parlamentar.service';
import {ConfigService} from './services/config.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ParlamentarModule,
    DespesaModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ConfigService, ParlamentarService, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

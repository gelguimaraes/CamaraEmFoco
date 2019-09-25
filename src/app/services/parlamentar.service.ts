import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Parlamentar} from '../model/Parlamentar';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs';


@Injectable()
export class ParlamentarService {

  private baseUrlService: string;
  parlamentarObserver = new Observable<Parlamentar>();

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.baseUrlService = configService.getUrlServiceParlamentarLocal() + 'dados/';
  }

  getParlamentares(): Observable<Parlamentar[]> {
    return this.http.get<Parlamentar[]>(this.baseUrlService);
  }

  getParlamentar(id: number): Observable<Parlamentar> {
   // console.log(this.baseUrlService + id)
   return this.http.get<Parlamentar>(this.baseUrlService + id);
  }

  atualizarParlamentar(parlamentar: Parlamentar) {
    return this.http.put(this.baseUrlService, JSON.stringify(parlamentar));
  }
}

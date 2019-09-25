import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Parlamentar} from '../../model/parlamentar';
import {ParlamentarService} from '../../services/parlamentar.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parlamentar',
  templateUrl: './parlamentar.component.html',
  styleUrls: ['./parlamentar.component.css']
})
export class ParlamentarComponent implements OnInit {

  parlamentares: Observable<Parlamentar[]>;
  constructor(private parlamentarService: ParlamentarService, private router: Router) { }

  ngOnInit() {
    this.parlamentares = this.parlamentarService.getParlamentares();
  }



}

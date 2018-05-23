import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player, Position } from '../models/group';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  load(playerId: number): Observable<Player> {
    return of(new Player({
        id: 1, 
        name: "Rodrigo Lima", 
        email: "rodrigo@gmail.com", 
        position: Position.MIDDLE,
        gender: "m",
        birthDate: moment().add(-30, "years"),
        groups: [{id: 1, name: "Pelada verão 2018"}, {id: 2, name: "Patriotes"}]
      }))
  }
}

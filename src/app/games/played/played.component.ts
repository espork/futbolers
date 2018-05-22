import { Component, OnInit, Input } from '@angular/core';
import {  Player, Position } from '../../models/group';
import * as moment from 'moment';
import { GamePlayed } from '../../models/game';

@Component({
  selector: 'games-played',
  templateUrl: './played.component.html',
  styleUrls: ['./played.component.css']
})
export class PlayedComponent implements OnInit {

  @Input() games: GamePlayed[];
  constructor() { }

  ngOnInit() {
  }
}

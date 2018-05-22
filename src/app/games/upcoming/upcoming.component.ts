import { Component, OnInit, Input } from '@angular/core';
import { Player, Position } from '../../models/group';
import * as moment from 'moment';
import { UpcomingGame } from '../../models/game';

@Component({
  selector: 'upcoming-game',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {

  @Input() game: UpcomingGame[];

  constructor() { }

  ngOnInit() {
  }
}


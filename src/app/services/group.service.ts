import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Player, Group, Position } from '../models/group';
import * as moment from 'moment';
import { GamePlayed, PlayerNumbers, Evaluation, UpcomingGame } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }

  load(groupId: number, player: Player): Observable<Group> {
    if(groupId == 1)
      return of(group1)
    else
      return of(group2)
  }
}

let player_1 = new Player({id: 1, name: "Rodrigo Lima", email: "rodrigo@gmail.com", position: Position.MIDDLE,gender: "male",
birthDate: moment().add(-30, "years"),})
let player_2 = new Player({id: 2, name: "Thiago Lima",gender: "male",
birthDate: moment().add(-30, "years"), email: "thiago@gmail.com", position: Position.DEFENSE})
let player_3 = new Player({id: 3, name: "Flavio jose",gender: "male",
birthDate: moment().add(-30, "years"), email: "flavioo@gmail.com", position: Position.KEEPER})
let player_4 = new Player({id: 4, name: "Alberto nunes",gender: "male",
birthDate: moment().add(-30, "years"), email: "albert@gmail.com", position: Position.STRIKER})

let player_20 = new Player({id: 20, name: "Borges cunha",gender: "male",
birthDate: moment().add(-30, "years"), email: "borges@gmail.com", position: Position.DEFENSE})
let player_30 = new Player({id: 30, name: "Alex Oliveira",gender: "male",
birthDate: moment().add(-30, "years"), email: "flavioo@gmail.com", position: Position.KEEPER})
let player_40 = new Player({id: 40, name: "Ivan Camargo",gender: "male",
birthDate: moment().add(-30, "years"), email: "albert@gmail.com", position: Position.STRIKER})

let gamesPlayed = [
    new GamePlayed({
      id: 1,
      date: moment().add(-1, "days"),  
      invited: [player_1, player_2, player_3, player_4], 
      confirmed: [player_1, player_2],
      playersNumbers: [
        new PlayerNumbers({player: player_1, goals: 3, assists: 10}),
        new PlayerNumbers({player: player_2, goals: 2, assists: 1})
      ], 
      votes: [
        new Evaluation({player: player_1, grades: [9.5, 7]}),
        new Evaluation({player: player_2, grades: [6.5, 5.5]}),
      ] }),

    new GamePlayed({
      id: 2,
      date: moment().add(-14, "days"), 
      invited: [player_1, player_2, player_3, player_4], 
      confirmed: [player_1, player_2, player_3, player_4],
      playersNumbers: [
        new PlayerNumbers({player: player_1, goals: 1, assists: 10}),
        new PlayerNumbers({player: player_2, goals: 2, assists: 1})
      ], 
      votes: [
        new Evaluation({player: player_1, grades: [3.5, 7]}),
        new Evaluation({player: player_2, grades: [6.5, 5.5]}),
      ] })
  ]

  let gamesPlayed2 = [
    new GamePlayed({
      id:2,
      date: moment().add(-14, "days"),
      invited: [player_1, player_20, player_30, player_40], 
      confirmed: [player_1, player_20, player_30, player_40],
      playersNumbers: [
        new PlayerNumbers({player: player_1, goals: 1, assists: 15}),
        new PlayerNumbers({player: player_20, goals: 25, assists: 1})
      ], 
      votes: [
        new Evaluation({player: player_1, grades: [3.5, 7]}),
        new Evaluation({player: player_20, grades: [6.5, 5.5]}),
      ] })
  ]

  let group1 = new Group({
    id: 1,
    name: "Pelada verão 2018",
    address: "College laval",
    dayOfWeek: "Sunday",
    start: "10:15",
    end: "12:00",
    limitVote: 5,
    maxPlayers: 20,
    startDate: moment(),
    players: [player_1, player_2, player_3, player_4],
    gamesPlayed: gamesPlayed,
  })

  let group2 = new Group({
    id: 2,
    name: "Patriotes",
    address: "Everywhere in montreal",
    dayOfWeek: "Wednesday",
    start: "21:00",
    end: "23:00",
    limitVote: 5,
    maxPlayers: 18,
    startDate: moment().add(-20, "days"),
    players: [player_1, player_20, player_30, player_40],
    gamesPlayed: gamesPlayed2,
    upcomingGame: new UpcomingGame({
      id: 15,
      date: moment().add(3, "days"),
      invited: [player_30, player_40],
      declined: [player_20],
      going: [player_1]
    })
  })

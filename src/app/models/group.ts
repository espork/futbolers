import * as moment from 'moment';
import { IUpcamingGame, IGamePlayed } from './game';

export enum Position {
    MIDDLE = "Midfield",
    DEFENSE = "Defense",
    STRIKER = "Striker",
    KEEPER = "Keeper",
}

export interface IPlayer {
    id: number;
    name: string;
    email: string;
    position: Position;
    birthDate: moment.Moment;
    groups?: IGroupInfo[];
    gender: string;
}
export class Player {
    id: number;
    name: string;
    email: string;
    position: Position;
    birthDate: moment.Moment;
    groups: IGroupInfo[];
    gender: string;
    
    constructor(player: IPlayer) {
        this.name = player.name;
        this.email = player.email;
        this.position = player.position;
        this.birthDate = player.birthDate;
        this.groups = player.groups;
        this.id = player.id;
        this.gender = player.gender;
    }

}

export interface IGroupInfo {
    id: number;
    name: string;
}

interface IGroup extends IGroupInfo {
    startDate: moment.Moment;
    endDate?: moment.Moment;
    players: Player[];
    start: string;
    end: string;
    maxPlayers: number;
    address: string;
    limitVote: number;
    dayOfWeek: string;
    upcomingGame?: IUpcamingGame;
    gamesPlayed?: IGamePlayed[];
}
export class Group implements IGroup {
    id: number;
    name: string;
    startDate: moment.Moment;
    endDate?: moment.Moment;
    start: string;
    end: string;
    maxPlayers: number;
    address: string;
    limitVote: number;
    players: Player[] = [];
    dayOfWeek: string;
    upcomingGame?: IUpcamingGame;
    gamesPlayed?: IGamePlayed[];

    constructor(group: IGroup) {
        this.players = group.players;
        this.startDate = group.startDate;
        this.name = group.name;
        this.start = group.start;
        this.end = group.end;
        this.maxPlayers = group.maxPlayers;
        this.address = group.address;
        this.limitVote = group.limitVote;
        this.maxPlayers = group.maxPlayers;
        this.dayOfWeek = group.dayOfWeek;
        this.upcomingGame = group.upcomingGame;
        this.gamesPlayed = group.gamesPlayed;
        this.endDate = group.endDate;
        this.id = group.id;
    }
    
    static empty() {
        return new Group({
            name: "", 
            startDate: moment(), 
            players: [], 
            start:"", 
            end: "", 
            maxPlayers: 0, 
            address: "",
            limitVote: 5,
            dayOfWeek: "", 
            id: 0
        })
    }
}


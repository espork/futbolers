import * as moment from 'moment';
import { Player } from './group';

export interface IGame {
    id: number;
    date: moment.Moment;
}

export interface IUpcamingGameInfo extends IGame {
    going: Player[];
    declined: Player[];
    invited: Player[];
}

export interface IUpcamingGame extends IUpcamingGameInfo {
   
    dateDescription(): string;
}


export interface IGamePlayedInfo extends IGame {
    playersNumbers: PlayerNumbers[];
    votes: Evaluation[];
    confirmed: Player[];
    invited: Player[];
}
export interface IGamePlayed extends IGamePlayedInfo {
    topScorer(): PlayerNumbers;
    topAssistant(): PlayerNumbers;
    beast(): Player;
    worst(): Player;
    dateDescription(): string;
}

export class UpcomingGame implements IUpcamingGame {
    id: number;
    date: moment.Moment;
    going: Player[];
    declined: Player[];
    invited: Player[];

    constructor(game: IUpcamingGameInfo) {
        this.id = game.id;
        this.date = game.date;
        this.going = game.going;
        this.declined = game.declined;
        this.invited = game.invited;
    }

    dateDescription(): string {
        return this.date.format("LLL")
    }
}

export class GamePlayed implements IGamePlayed {
    id: number;
    date: moment.Moment;
    playersNumbers: PlayerNumbers[];
    votes: Evaluation[];
    confirmed: Player[];
    invited: Player[];

    constructor(game: IGamePlayedInfo) {
        this.id = game.id;
        this.date = game.date;
        this.playersNumbers = game.playersNumbers;
        this.votes = game.votes;
        this.confirmed = game.confirmed
        this.invited = game.invited;
    }

    topScorer(): PlayerNumbers {
        return this.playersNumbers.sort( (a, b) => {
            return b.goals - a.goals;
        })[0];
    }

    topAssistant(): PlayerNumbers {
        return this.playersNumbers.sort( (a, b) => {
            return b.assists - a.assists;
        })[0];
    }

    beast(): Player {
        return this.votes.sort( (a, b) => {
            return a.score() - b.score();
        }).map( e => e.player)[0];
    }

    worst(): Player {
        return this.votes.sort( (a, b) => {
            return b.score() - a.score();
        }).map( e => e.player)[0];
    }

    dateDescription(): string {
        return this.date.format("LL");
    }

}

interface IEvaluation {
    player: Player;
    grades: number[];
}

export class Evaluation {
    player: Player;
    grades: number[];

    constructor(evaluation: IEvaluation) {
        this.player = evaluation.player;
        this.grades = evaluation.grades;
    }

    score(): number {
        let total = this.grades.reduce( (total, num) => total + num);
        return total / this.grades.length;
    }
}

interface IPlayerNumbers {
    player: Player;
    goals: number;
    assists: number;
}

export class PlayerNumbers {
    player: Player;
    goals: number;
    assists: number;

    constructor(playerNumbers: IPlayerNumbers) {
        this.player = playerNumbers.player;
        this.goals = playerNumbers.goals;
        this.assists = playerNumbers.assists
    }
}
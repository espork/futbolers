import { Component, OnInit } from '@angular/core';
import { GroupService } from './services/group.service';
import { Player, Position, Group, IGroupInfo } from './models/group';
import { PlayerService } from './services/player.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  selectedGroup: Group;
  player: Player;
  constructor(
    private groupService: GroupService,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.playerService.load(1).subscribe( player => {

      console.log(player)
      this.player = player;
      this.loadGroup(player.groups[0], player)
    })
  }
  
  loadGroup(group: IGroupInfo, player:Player): void {
    this.groupService.load(group.id, player)
        .subscribe( group => {
          console.log(group)
          this.selectedGroup = group
        });
  }

  onSelectGroup(group: IGroupInfo): void {
    this.loadGroup(group, this.player)
  }

}

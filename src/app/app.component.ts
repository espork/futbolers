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
  loading: boolean = false;
  constructor(
    private groupService: GroupService,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.playerService.load(1).subscribe( player => {
      this.player = player;
      console.log(this.player.groups)
      this.loadGroup(player.groups[0], player)
    })
  }
  
  loadGroup(group: IGroupInfo, player:Player): void {
    setTimeout( () => {
    this.groupService.load(group.id, player)
        .subscribe( group => {
          this.selectedGroup = group
          this.loading = false;
        });
      }, 2000)
  }

  onSelectGroup(group: IGroupInfo): void {
    this.loading = true;
    this.loadGroup(group, this.player)
  }

}

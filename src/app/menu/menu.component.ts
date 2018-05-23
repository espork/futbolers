import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import {  Player, Position, IGroupInfo } from '../models/group';
import { MatDialog } from '@angular/material';
import { GroupComponent } from '../group/group.component';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  ngOnInit() { }

  @Input() player: Player;

  @Output() selectGroup: EventEmitter<IGroupInfo> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openCreateGroup(): void {
    let dialogRef = this.dialog.open(GroupComponent, {
      width: '300px',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openProfile(): void {
    let dialogRef = this.dialog.open(ProfileComponent, {
      width: '300px',
      disableClose: true,
      data: this.player,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onSelectGroup(group: IGroupInfo): void {
    this.selectGroup.emit(group)
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import {  Player, Position } from '../models/group';

@Component({
  selector: 'edit-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [
    //TODO import in app module
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class ProfileComponent implements OnInit {

  player = this.data;
  startDate = moment().add(-30, "years")
  
  positions() : Array<string> {
    return Object.keys(Position);  
  }
  
  constructor(
    public dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Player) {}

  ngOnInit() {
    
  }

  onSaveClick(): void {
    console.log(this.player)
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}

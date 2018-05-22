import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import * as moment from 'moment';
import { Group } from '../models/group';

@Component({
  selector: 'create-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  group = Group.empty()
  
  daysOfWeek = moment.weekdays();
  
  constructor(
    public dialogRef: MatDialogRef<GroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    console.log(this.group)
  }

  onSaveClick(): void {
    console.log(this.group  )
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}

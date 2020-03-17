import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { taskDialogData } from '../task/task.component';
import { CampaignService } from 'src/app/services/campaign.service';
import { campaign } from 'src/app/models/campaign';


@Component({
  selector: 'app-task-create-update',
  templateUrl: './task-create-update.component.html',
  styleUrls: ['./task-create-update.component.css']
})
export class TaskCreateUpdateComponent implements OnInit {
  campaigns: campaign[] = [];
  // selectedCampaignId : number;
  selected = "";
  constructor(
    public dialogRef: MatDialogRef<TaskCreateUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public task: taskDialogData, private campaignService: CampaignService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.getAllCampaigns();
  }

  getAllCampaigns(){
  
    this.campaignService.getAllCampaigns().then(
      res => {
      this.campaigns = res as campaign[];
    },
    err => {
      console.log(err);
    }   
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { campaign } from 'src/app/models/campaign';
import { CampaignService } from 'src/app/services/campaign.service';
import { task } from 'src/app/models/task';
import { MatDialog } from '@angular/material/dialog';
import { CampaignCreateComponent } from '../campaign-create/campaign-create.component';
import { TaskCreateUpdateComponent } from '../task-create-update/task-create-update.component';

export interface CampaignDialogData {
  id: number;
  title: string;
  color: string;
  icon: string;
}

export interface taskDialogData {
  id: number;
  title: string;
  description: string;
  campaignId: number;
}

@Component({
  selector: 'app-capmaign',
  templateUrl: './capmaign.component.html',
  styleUrls: ['./capmaign.component.css']
})
export class CapmaignComponent implements OnInit {
  panelOpenState = false;
  campaigns: campaign[] = [];
  displayedColumns: string[] = ['details', 'title', 'campaign', 'editDelete', 'assignedUser', 'date'];
  dataSource: task[] =[];
  campaign: campaign; // for dialog (popup) using
  constructor(private campaignService: CampaignService, public campainDialog: MatDialog, public taskDialog: MatDialog) { }

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

  panelClick(campaign: campaign){
     this.dataSource = [];
    campaign.tasks.forEach(element => {
      this.dataSource.push(element);
    });
  }

  createCampaign(): void {
    const dialogRef = this.campainDialog.open(CampaignCreateComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.campaignService.postCampaign(result).subscribe(
        result => {
          this.getAllCampaigns();
        },
        err => {
          console.log(err);
        }      
      );
             
    });
  }

  updateCampaign(campaign){
    const dialogRef = this.campainDialog.open(CampaignCreateComponent, {
      width: '350px',
      data: {id: campaign.id, title: campaign.title, color: campaign.color, icon: campaign.icon}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      result.id = campaign.id;
      result.updated = campaign.updated;
      this.campaignService.updateCampaign(result).subscribe(
        result => {
          this.getAllCampaigns();
        },
        err => {
          console.log(err);
        }      
      );
             
    });

  }

  deleteCampaign(campaignId: number){
    this.campaignService.deleteCampaign(campaignId).subscribe(
      result => {
        this.getAllCampaigns();
      },
      err =>{
        console.log(err);
      }
    );
  }

  getAllTasksByCampaignId(campaignId: number){ 
    this.campaignService.getAllTasksByCampaignId(campaignId).then(
      res => {
        this.dataSource = [];
        this.dataSource = res as task[];
        console.log(this.dataSource);
    },
    err => {
      console.log(err);
    }   
    );
  }

  updateTask(task: task, campaignId: number){
    const dialogRef = this.taskDialog.open(TaskCreateUpdateComponent, {
      width: '350px',
      data: {id: task.id, title: task.title, description: task.description, campaignId: task.campaignId}
    });

    dialogRef.afterClosed().subscribe(result => {
      result.id = task.id;
      result.updated = task.updated; // to be used for validation
      this.campaignService.updateTaskByCampaignId(campaignId, result).subscribe(
        result => {
          this.getAllCampaigns();
          this.getAllTasksByCampaignId(campaignId);
        },
        err => {
          console.log(err);
        }      
      );
             
    });

  }
  
  
  deleteTaskByCampaignId(taskId: number, campaignId: number){
    this.campaignService.deleteTaskByCampaignId(campaignId, taskId).subscribe(
      result => {
        this.getAllTasksByCampaignId(campaignId);      
      },
      err =>{
        console.log(err);
      }
    );

  }

}

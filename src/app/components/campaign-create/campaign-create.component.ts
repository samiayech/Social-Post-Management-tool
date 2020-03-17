import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CampaignDialogData } from '../capmaign/capmaign.component';

@Component({
  selector: 'app-campaign-create',
  templateUrl: './campaign-create.component.html',
  styleUrls: ['./campaign-create.component.css']
})
export class CampaignCreateComponent implements OnInit {
color: string;
icon : string;
  constructor(
    public dialogRef: MatDialogRef<CampaignCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public campaign: CampaignDialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  pickColor(color: string){
    this.campaign.color = color;
  }

  onIconPickerSelect(icon: string){
    this.campaign.icon = icon;
    this.icon = icon;
  }

  ngOnInit(): void {
  }

}

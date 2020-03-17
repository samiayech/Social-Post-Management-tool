import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { campaign } from '../models/campaign';
import { task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
url: string = "https://localhost:44396/api/campaigns"

  constructor(private http: HttpClient) { }

  getAllCampaigns(){
   return this.http.get(this.url).toPromise();  
  }

  postCampaign(campaign: campaign){
    return this.http.post(this.url, campaign);  
   }

   updateCampaign(campaign: campaign){
    return this.http.put(this.url + "/" + campaign.id, campaign);
  }
  
  deleteCampaign(campaignId: number){
    return this.http.delete(this.url + "/" + campaignId);
  }

  getAllTasksByCampaignId(campaignId: number){
    return this.http.get(this.url + "/" + campaignId + "/tasks" ).toPromise(); 
  }

  updateTaskByCampaignId(campaignId: number, task: task){
    return this.http.put(this.url + "/" + campaignId + "/tasks/" + task.id, task);

  }

  deleteTaskByCampaignId(campaignId: number, taskId: number){
    return this.http.delete(this.url + "/" + campaignId + "/tasks/" + taskId);

  }
}

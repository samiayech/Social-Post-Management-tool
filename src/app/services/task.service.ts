import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url: string = "https://localhost:44396/api/tasks"

  constructor(private http: HttpClient) { }

  getAllTasks(){
   return this.http.get(this.url).toPromise();  
  }

  postTask(task: task){
    return this.http.post(this.url, task);  
   }

   updateTask(task: task){
    return this.http.put(this.url + "/" + task.id, task);
  }
  
  deleteTask(taskId: number){
    return this.http.delete(this.url + "/" + taskId);
  }

}

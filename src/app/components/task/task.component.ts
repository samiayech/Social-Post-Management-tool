import { Component, OnInit } from '@angular/core';
import { task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskCreateUpdateComponent } from '../task-create-update/task-create-update.component';

export interface taskDialogData {
  id: number;
  title: string;
  description: string;
  campaignId: number;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: task[] = [];
  displayedColumns: string[] = ['details', 'title', 'campaign', 'editDelete', 'assignedUser', 'date'];
  dataSource: task[] =[];
  task: task; // for dialog (popup)
  constructor(private taskService: TaskService, public taskDialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllTasks();
  }
getAllTasks(){ 
  this.taskService.getAllTasks().then(
    res => {
    this.tasks = res as task[];
    this.loadDataSource(this.tasks);
  },
  err => {
    console.log(err);
  }   
  );
}

loadDataSource(tasks: task[]){
  this.dataSource = [];
 tasks.forEach(element => {
   this.dataSource.push(element);
 });
}

  createTask(): void {
    const dialogRef = this.taskDialog.open(TaskCreateUpdateComponent, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.taskService.postTask(result).subscribe(
        result => {
          this.getAllTasks();
        },
        err => {
          console.log(err);
        }      
      );
             
    });
  }

  updateTask(task: task){
    const dialogRef = this.taskDialog.open(TaskCreateUpdateComponent, {
      width: '350px',
      data: {id: task.id, title: task.title, description: task.description, campaignId: task.campaignId}
    });

    dialogRef.afterClosed().subscribe(result => {
      result.id = task.id;
      result.updated = task.updated; // to be used for validation
      this.taskService.updateTask(result).subscribe(
        result => {
          this.getAllTasks();
        },
        err => {
          console.log(err);
        }      
      );
             
    });

  }

  deleteTask(taskId: number){
    this.taskService.deleteTask(taskId).subscribe(
      result => {
        this.getAllTasks();
      },
      err =>{
        console.log(err);
      }
    );
  }

}

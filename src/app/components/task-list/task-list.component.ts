import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  title = 'WORKERPORTAL';
  userData:any=[
    {taskid:"20",projectid:"1",tasktitle:"Coding",taskdescription:"Class Task",startdate:"23-04-2020",enddate:"23-05-2020",subtaskcount:"5",status:"completed"},
    {taskid:"30",projectid:"2",tasktitle:"Renting App",taskdescription:"IBM Project",startdate:"12-04-2020",enddate:"12-05-2020",subtaskcount:"6",status:"not completed"},
    {taskid:"40",projectid:"3",tasktitle:"LPG GAS Booking",taskdescription:"IBM Project",startdate:"23-04-2020",enddate:"23-05-2020",subtaskcount:"5",status:"completed"},
    {taskid:"50",projectid:"4",tasktitle:"Task Manager",taskdescription:"IBM Project",startdate:"23-04-2020",enddate:"23-05-2020",subtaskcount:"5",status:"not completed"},
    {taskid:"60",projectid:"5",tasktitle:"E-commerce App",taskdescription:"IBM Project",startdate:"23-04-2020",enddate:"23-05-2020",subtaskcount:"5",status:"completed"}
  ];
  constructor() {
    console.log(this.userData);
  }

  ngOnInit(): void {
  }

}

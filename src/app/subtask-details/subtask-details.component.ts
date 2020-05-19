import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtask-details',
  templateUrl: './subtask-details.component.html',
  styleUrls: ['./subtask-details.component.css']
})
export class SubtaskDetailsComponent implements OnInit {
  title = 'WORKERPORTAL';
  userData:any=[
    {subtaskid:"201",taskid:"20",employeeid:"9001",subtasktitle:"Coding",subtaskdescription:"Class Task",startdate:"23-04-2020",duedate:"23-05-2020"},
    {subtaskid:"202",taskid:"20",employeeid:"9001",subtasktitle:"Coding",subtaskdescription:"Class Task",startdate:"23-04-2020",duedate:"23-05-2020"},
    {subtaskid:"203",taskid:"20",employeeid:"9001",subtasktitle:"Coding",subtaskdescription:"Class Task",startdate:"23-04-2020",duedate:"23-05-2020"},
    {subtaskid:"204",taskid:"20",employeeid:"9001",subtasktitle:"Coding",subtaskdescription:"Class Task",startdate:"23-04-2020",duedate:"23-05-2020"},
    {subtaskid:"205",taskid:"20",employeeid:"9001",subtasktitle:"Coding",subtaskdescription:"Class Task",startdate:"23-04-2020",duedate:"23-05-2020"}
  ];
  constructor() {
    console.log(this.userData);
  }

  ngOnInit(): void {
  }

}

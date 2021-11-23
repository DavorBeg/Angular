import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { TASK } from '../../taskint'
import { TaskServiceService } from 'src/app/services/task-service.service';



@Component({
  selector: 'app-taskcomponents',
  templateUrl: './taskcomponents.component.html',
  styleUrls: ['./taskcomponents.component.css']
})
export class TaskcomponentsComponent implements OnInit {

  
   
  task: TASK[] = [];
  @Input() new_task: TASK;
  @Input() updateTable: EventEmitter<boolean>;

  constructor(private TaskService: TaskServiceService) 
  {


  }
  ngOnChanges() {
    if(this.new_task !== undefined)
    {
      let nt = this.new_task
      this.TaskService.addTask(nt).subscribe((nt) => this.task.push(nt))
    }
  }
  ngOnInit(): void 
  {
      // Pozivamo TaskService funkciju getTasks .subscribe (jer je Observarble tip) uzimamo tasks i izjednacit cemo lokalnu varijablu sa povratnom tasks iz subscribea
      if(this.updateTable)
      {
        this.updateTable.subscribe(() => {
          this.task = []
        })
      }
      this.TaskService.getTasks().subscribe((tasks) => this.task = tasks)
      

  }
  deleteTask(task) 
  {
    // pozivamo deleteTask iz Task servis modula. kako je to http request moramo se subscribe i u arrow funkciji
    // filtriramo array task kako bi filtrirali sve elemente koji nemaju isti ID kao ID koji smo poslali.
    // primjera radi: array = [ 1, 2, 3, 4,5 ] --- array.filter(number => number >= 3) funkcija ce vratit "3,4,5"

    this.TaskService.deleteTask(task).subscribe(() => this.task = this.task.filter(t => t.id !== task.id))
  }
  reminderChecked(task)
  {
    this.TaskService.updateTask(task).subscribe()
  }
}

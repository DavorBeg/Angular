import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AnimationEvent, state, trigger, transition, animate, style } from '@angular/animations';
import { NgClass } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { TASK } from 'src/app/taskint';
import { TaskcomponentsComponent } from '../taskcomponents/taskcomponents.component';

@Component({
  selector: 'app-task-inserter',
  templateUrl: './task-inserter.component.html',
  styleUrls: ['./task-inserter.component.css'],
  animations: [
    trigger("show", [
      
      state('opened', style({
        left: '-350px'
      })),
      state('closed', style({
        left: '10px'
      })),
      transition('opened => closed', [
        animate('1s ease')
      ]),
      transition('closed => opened', [
        animate('1s ease')
      ]),
    ])
  ]
})
export class TaskInserterComponent implements OnInit {

  @Input() taskIsShowed: boolean;
  @Output() onTaskAdded: EventEmitter<TASK> = new EventEmitter<TASK>()

  z_index: number = -1;

  // Input varijable
  dateTime: string;
  taskText: string = '';
  reminder: boolean = false;
  

  constructor() { }

  ngOnInit(): void 
  {

  }

  // Lifecyle event koji prati kada se varijabla taskIsShowed promjeni.
  ngOnChanges(taskIsShowed: boolean) {}

  animationIsDone() 
  {
    if(this.taskIsShowed) return this.z_index = 1; 
    else return 0;
  }
  animationStart() 
  {
    if(!this.taskIsShowed) return this.z_index = -1;
    else return 0; 
  }
  getDayName(day: number)
  {
    let d: string;
    switch(day)
    {
      case 0: 
        d = "Nedjelja"; break;      
      case 1: 
        d = "Ponedjeljak"; break;
      case 2: 
        d = "Utorak"; break;
      case 3: 
        d = "Srijeda"; break;
      case 4: 
        d = "Četvrtak"; break;
      case 5: 
        d = "Petak"; break;
      case 6: 
        d = "Subota"; break;
    }
    return d;

  }
  addNewTask() 
  {
    /*
      koristi mydate.getDate za DAN
              mydate.getMonth za MJESEC
              mydate.getFullYear za GODINU
              this.getDayName(mydate.getDay()) za NAZIV DANA
    */
    const mydate = new Date(this.dateTime);
    if(this.dateTime !== undefined) {

      const new_task = {
        time: `${this.getDayName(mydate.getDay())} ${mydate.getDate()}.${mydate.getMonth()+1}.${mydate.getFullYear()}`,
        text: this.taskText,
        reminder: this.reminder
      };

      // Kada se stisne gumb za kreiranje taska obrisat cemo sve u text box inputu i reminder stavit na false. Datum cemo ostavit
      this.taskText = '';
      this.reminder = false;

      this.onTaskAdded.emit(new_task);

      
    }
  }
    
}

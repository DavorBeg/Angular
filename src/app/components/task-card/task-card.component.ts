import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TASK } from '../../taskint'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faBlackberry } from '@fortawesome/free-brands-svg-icons';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
  animations: [
    trigger('fade', [

    ])
  ]
})
export class TaskCardComponent implements OnInit {

  @Input() task: TASK;

  @Output() OnDeleteTask: EventEmitter<TASK> = new EventEmitter();

  @Output() OnReminderChecked: EventEmitter<TASK> = new EventEmitter();
  
  faTimes = faTimes;

  constructor() {} 

  ngOnInit(): void 
  {

  }

  // Event koji se poziva clickom iz task-card.html 
  onDelete(task) 
  {
    // event emiter saljem van kako bi ga koristio u taskcomponents.html 
    this.OnDeleteTask.emit(task) 
    
  }

  onDoubleClick(task: TASK): void
  {
    task.reminder = !task.reminder

    this.OnReminderChecked.emit(task)

  }

}

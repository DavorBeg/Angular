import { trigger, state, transition, animate, style } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.css'],
  animations: [
    trigger("show", [
      
      state('opened', style({
        left: '+620px'
      })),
      state('closed', style({
        left: '150px'
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
export class DeleteAllComponent implements OnInit {

  @Input() deleteAllisShowed: boolean;
  @Output() deleteAll = new EventEmitter();
  z_index: number;
  constructor(private taskservice: TaskServiceService) { }

  ngOnInit(): void {

  }
  animationIsDone() 
  {
    if(this.deleteAllisShowed) return this.z_index = 1; 
    else return 0;
  }
  animationStart() 
  {
    if(!this.deleteAllisShowed) return this.z_index = -1;
    else return 0; 
  }
  deleteAllTasks()
  {
     this.taskservice.deleteAll()
     this.deleteAll.emit()

  }

}

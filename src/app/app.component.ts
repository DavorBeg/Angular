import { NgClass } from '@angular/common';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { TaskcomponentsComponent } from './components/taskcomponents/taskcomponents.component';
import { tasks } from './task-list';
import { TASK } from './taskint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'to-do-app';

  taskIsShowed: boolean = false;
  aboutIsShowed: boolean = false;
  deleteAllisShowed: boolean = false;

  disabled: boolean = false;
  new_task: TASK;


  updateTable: EventEmitter<boolean> = new EventEmitter();
  
  constructor() 
  {
    
  }
  
  // button Add task
  AddTask() 
  {
    // ako gumb nije disablean
    if(!this.disabled) {

      // taskIsShowed postaje kontra onoga što je bio
      this.taskIsShowed = !this.taskIsShowed;

      // gumb postaje disabled
      this.disabled = true;

      // timeout FUŠ TEŠKI kojim nakon 1s gumb postaje enabled odnosno false disabled
      setTimeout(() => {
        this.disabled = false
      }, 1000);

    }

  }

  // button About
  AboutUs() 
  {
    // ako gumb nije disablean
    if(!this.disabled) {

      this.aboutIsShowed = !this.aboutIsShowed;

      this.disabled = true;

      setTimeout(() => {
        this.disabled = false
      }, 1000);

    }    
  }

  //button Delete All
  DeleteAll() 
  {
    console.log("test")
    if(!this.disabled) {

      this.deleteAllisShowed = !this.deleteAllisShowed;

      this.disabled = true;

      setTimeout(() => {
        this.disabled = false
      }, 1000);

    }   

  }
  allDeleted()
  {
      this.updateTable.emit();
  }
  onTaskAdded(new_task: TASK)
  {
    this.new_task = new_task;
  }

}

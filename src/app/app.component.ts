import { NgClass } from '@angular/common';
import { Component, Output, Input } from '@angular/core';
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
  disabled: boolean = false;
  new_task: TASK;

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
    console.log(tasks)
  }

  //button Delete All
  DeleteAll() 
  {
    console.log("Delete tasks")

  }
  onTaskAdded(new_task: TASK)
  {
    this.new_task = new_task;
  }

}

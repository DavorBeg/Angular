import { 
  animate, 
  state, 
  style, 
  transition, 
  trigger } from '@angular/animations';

import { Component, OnInit, Input } from '@angular/core';
import { TaskServiceService } from 'src/app/services/task-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [Router],
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
export class AboutComponent implements OnInit {

  text: {text: string, version: string}  = {text: '', version: ''};
  @Input() aboutIsShowed: boolean;
  z_index: number = -1;
  constructor(private taskService: TaskServiceService) { }

  ngOnInit(): void {
    this.taskService.getAboutText().subscribe((aboutText) => this.text = aboutText)
  
    
  }

  animationIsDone() 
  {
    if(this.aboutIsShowed) return this.z_index = 1; 
    else return 0;
  }
  animationStart() 
  {
    if(!this.aboutIsShowed) return this.z_index = -1;
    else return 0; 
  }
  navigateToGitHub()
  {
    window.location.href = "https://github.com/DavorBeg/Angular";
  }
}


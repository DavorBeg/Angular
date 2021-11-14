import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  @Input() text: string;
  @Input() color: string;
  @Input() height: string;
  @Input() width: string;
  @Input() margin: string;
  @Output() button_click = new EventEmitter();
  
  text_color: string;

  constructor() 
  { 

  }

  ngOnInit(): void 
  {
    if(this.color === "white") {

      this.text_color = "black";

    }
  }

  OnClick()
  {

    this.button_click.emit();

  }
}

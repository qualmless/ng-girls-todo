import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `

    <input  #inputElementRef
            class="todo-input"
            [value]="title" 
            (keyup.enter)="submitValue($event.target.value)">
    <button (click)="submitValue(inputElementRef.value)"
            class="btn">
      Save
    </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
  

export class InputButtonUnitComponent implements OnInit {

  title = 'Hello World!';

  constructor() {   }

  ngOnInit() {  }

  @Output() submit: EventEmitter < string > = new EventEmitter();

  submitValue(newTitle: string){
    this.submit.emit(newTitle);
  }



}

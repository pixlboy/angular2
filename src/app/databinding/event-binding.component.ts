import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'as-event-binding',
  template: `
    <button (click)="onClicked()">Click Here!!</button>
  `,
  styles: []
})
export class EventBindingComponent{

    @Output() clicked = new EventEmitter<string>();

    onClicked(){
        this.clicked.emit("Custom event clicked!");
    }

}

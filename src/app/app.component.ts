import { Component } from '@angular/core';
@Component({
  selector: 'as-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'I am Angular 2 root component!!';
    testOutsideContent = 'Initial external value.';
    amount = 1000;

    changeAmount(){
        this.amount = 2000;
    }

    onChangeValue(){
        this.testOutsideContent = 'Initial external value changed.';
    }
}

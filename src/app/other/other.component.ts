import { Component } from '@angular/core';

@Component({
  selector: 'as-other',
  templateUrl: './other.component.html',
  styles : [`
        p {
            color:#00b8fe;
        }
    `]
})
export class OtherComponent{

    onClicked(value: string){
        alert(value);
    }

}

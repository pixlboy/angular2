import { Component, Input } from '@angular/core';

@Component({
  selector: 'as-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
    stringInterpolation = "This is an example of one way binding and string interpolation.";
    value = "This is an example of DOM property binding.";

    addBorder(){
        return true;
    }

    onClicked(){
        alert("An example of event binding in Ng2.");
    }

    @Input() result: number = 0;

    person: Object = {
        name    : "Rachit",
        age     : 28
    }
}

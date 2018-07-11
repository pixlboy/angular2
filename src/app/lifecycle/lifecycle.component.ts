import {
    Component,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    Input,
    ViewChild,
    ContentChild
} from '@angular/core';

@Component({
  selector: 'as-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {

    constructor() { }

    @Input() bindable:number = 0;

    @ViewChild('boundViewElement')
    boundViewElement: HTMLElement;

    @ContentChild('boundContentElement')
    boundContentElement: HTMLElement;

    changeAmount(){
        this.bindable = 2000;
    }

    ngOnChanges() {
        console.log('ngOnChanges');
    }

    ngOnInit() {
        console.log('ngOnInit');
    }

    ngDoCheck() {
        console.log('ngDoCheck');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
        console.log('boundContentElement: ', this.boundContentElement);
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
        console.log('boundViewElement: ', this.boundViewElement);
    }

    ngAfterViewChecked(){
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy(){
        console.log('ngOnDestroy');
    }
}

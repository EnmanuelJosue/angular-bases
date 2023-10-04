import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  public counter: number = 0;

  increaseCounter(value : number): void{
    this.counter += value;
  }

  reset(value: number):void{
    this.counter = value;
  }


}

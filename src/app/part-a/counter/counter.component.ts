import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {
  count = 0;

  constructor() { }

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

  ngOnInit() {
  }

}

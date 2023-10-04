import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {
  contador = 0;
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.contador++;
  }

  decrement() {
    if (this.contador > 0) {
      this.contador--;
    }
  }

  restart() {
    this.contador = 0;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo2';
  fecha: Date = new Date();
  bandera = true;
  items: string[] = ['uno', 'dos', 'tres'];
}

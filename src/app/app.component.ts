import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'word-type';

  colors = [
    '#00C853',
    '#C51162',
    '#AA00FF',
    '#2962FF',
    '#00B8D4',
    '#00BFA5',
    '#D50000',
  ];

  colorChange() {
    console.log('colorsChanged?');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'word-type';

  colorPairs = [
    { primary: '#00C853', secondary: '#DC143C' },
    { primary: '#AA00FF', secondary: '#DC143C' },
    { primary: '#00BFA5', secondary: '#DC143C' },
    { primary: '#C51162', secondary: '#FFD600' },
    { primary: '#2962FF', secondary: '#DC143C' },
    { primary: '#D50000', secondary: '#FFD600' },
    { primary: '#00B8D4', secondary: '#DC143C' },
  ];
  colorIndex = 1;
  colors = [
    '#00C853',
    '#00BFA5',
    '#C51162',
    '#AA00FF',
    '#2962FF',
    '#00B8D4',
    '#D50000',
  ];

  currentPrimaryColor: string = this.colorPairs[0].primary;
  nextPrimaryColor: string = this.colorPairs[1].primary;
  secondaryColor: string = this.colorPairs[0].secondary;
  nextSecondaryColor: string = this.colorPairs[1].secondary;

  colorChange() {
    this.colorIndex++;
    if (this.colorIndex > this.colorPairs.length - 1) this.colorIndex = 0;
    this.currentPrimaryColor = this.nextPrimaryColor;
    this.secondaryColor = this.nextSecondaryColor;
    this.nextPrimaryColor = this.colorPairs[this.colorIndex].primary;
    this.nextSecondaryColor = this.colorPairs[this.colorIndex].secondary;
  }
}

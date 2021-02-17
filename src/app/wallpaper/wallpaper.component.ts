import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.scss'],
})
export class WallpaperComponent {
  @Output() colorChange: EventEmitter<any> = new EventEmitter();
  transition: boolean = false;
  hideTransition: boolean = false;
  // colors = ['#9AC4F8', '#99EDCC', '#CB958E', '#E36588', '#9A275A'];
  colors = [
    '#00C853',
    '#C51162',
    '#AA00FF',
    '#2962FF',
    '#00B8D4',
    '#00BFA5',
    '#D50000',
  ];
  wallpaperColor: string = this.colors[0];
  nextWallpaperColor: string = this.colors[1];
  colorIndex = 2;
  transitioning = false;

  constructor() {}

  showTransition(): void {
    this.colorChange.emit();
    if (this.transition) return;
    this.transition = true;
    setTimeout(() => {
      this.wallpaperColor = this.nextWallpaperColor;
      this.nextWallpaperColor = this.colors[this.colorIndex];
      this.colorIndex++;
      this.hideTransition = true;
      this.transition = false;
      if (this.colorIndex > this.colors.length - 1) this.colorIndex = 0;
      this.hideTransition = false;
    }, 1500);
  }
}

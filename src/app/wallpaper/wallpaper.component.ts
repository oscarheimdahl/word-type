import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.scss'],
})
export class WallpaperComponent implements OnInit {
  transition: boolean = false;
  hideTransition: boolean = false;
  colors = ['#9AC4F8', '#99EDCC', '#CB958E', '#E36588', '#9A275A'];
  wallpaperColor: string = this.colors[0];
  nextWallpaperColor: string = this.colors[1];
  colorIndex = 0;
  transitioning = false;
  constructor() {}

  ngOnInit(): void {}

  showTransition(): void {
    if (this.transition) return;
    this.transition = true;

    setTimeout(() => {
      this.wallpaperColor = this.nextWallpaperColor;
      this.nextWallpaperColor = this.colors[this.colorIndex];
      this.hideTransition = true;
      this.transition = false;
      this.colorIndex++;
      if (this.colorIndex > this.colors.length - 1) this.colorIndex = 0;
      this.hideTransition = false;
    }, 1500);
  }
}

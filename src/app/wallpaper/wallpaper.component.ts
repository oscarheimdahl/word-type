import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.scss'],
})
export class WallpaperComponent implements OnInit {
  @Input() value: any;

  constructor() {}

  ngOnInit(): void {}
}

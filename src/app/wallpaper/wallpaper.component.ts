import { Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.scss'],
})
export class WallpaperComponent {
  @Input() color: string | undefined;
  @Input() spaceMode: boolean | undefined;
  @Input() nextColor: string | undefined;
  @Output() colorChange: EventEmitter<any> = new EventEmitter();
  @Output() toggleSpaceMode: EventEmitter<any> = new EventEmitter();
  transition: boolean = false;
  hideTransition: boolean = false;
  transitioning = false;

  constructor() {}

  showTransition(): void {
    if (this.transition) return;
    this.transition = true;
    setTimeout(() => {
      this.colorChange.emit();
      this.hideTransition = true;
      this.transition = false;
      this.hideTransition = false;
    }, 1500);
  }
}

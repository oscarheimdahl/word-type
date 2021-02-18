import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WallpaperComponent } from './wallpaper/wallpaper.component';
import { InputReaderComponent } from './input-reader/input-reader.component';
import { RoundButtonComponent } from './round-button/round-button.component';

@NgModule({
  declarations: [AppComponent, WallpaperComponent, InputReaderComponent, RoundButtonComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

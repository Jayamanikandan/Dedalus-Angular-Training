import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { GalleryContainerComponent } from './gallery-container/gallery-container.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeatureComponent } from './feature/feature.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    GalleryContainerComponent,
    GalleryComponent,
    FeatureComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

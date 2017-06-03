import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlbumListItemComponent } from './components/spotify/album-list-item.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { AlbumListComponent } from './components/spotify/album-list.component';
import { SpotifyAPIService } from './services/spotify-api.service';
import { TrackListComponent } from './components/spotify/track-list.component';
import { SecsToTimePipe } from './components/pipes/secstotime.pipe';
import { SpotifyAudioService } from './services/spotify-audio.service';

@NgModule({
  declarations: [
    // root
    AppComponent,
    // shared comps
    AlbumListItemComponent, FormFilterComponent, AlbumListComponent, TrackListComponent,
    // pipes
    SecsToTimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SpotifyAudioService, SpotifyAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }

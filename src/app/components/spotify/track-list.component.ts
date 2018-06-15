import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tracks-list',
  template: `
    <div class="modal-content">
      <a class="artist-name" 
        [href]="album.artists[0].external_urls.spotify"
        target="_blank">
          {{album.artists[0].name}}
      </a>
      
      <div class="album-name">{{album.name}}</div>
            
      <div class="tracks-list">
          
          <div class="track" 
            *ngFor="let t of album.tracks.items; let i = index"
            (click)="trackClick.emit(t)"
            [style.color]="t.id === track?.id ? 'orange' : null"
            [style.color]="t.preview_url === null ? 'red' : null"
            >
            {{i+1}}. {{t.name}} - {{t.duration_ms | secsToTime: true}} 
          </div>
      </div>
        
       <i class="remove circle icon close-button"
        (click)="close.emit()"></i>
    </div>
  `,
  styleUrls: ['./track-list.component.css']

})
export class TrackListComponent {
  @Input() album: any;
  @Input() track: any;
  @Output() trackClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
}

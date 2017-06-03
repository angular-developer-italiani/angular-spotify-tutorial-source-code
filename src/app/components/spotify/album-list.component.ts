import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Album } from '../../services/album-interface';

@Component({
  selector: 'album-list',
  template: `
    <div class="grid">
      <album-list-item
        *ngFor="let album of albums"
        [album]="album"
        [active]="activeAlbum?.id === album.id"
        (click)="itemClick.emit(album)"></album-list-item>
    </div>
  `,
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {
  @Input() albums: Array<Album>;
  @Input() activeAlbum: Album;
  @Output() itemClick: EventEmitter<Album> = new EventEmitter<Album>();
}``

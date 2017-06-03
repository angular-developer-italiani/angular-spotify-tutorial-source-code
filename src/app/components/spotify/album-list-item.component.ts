import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'album-list-item',
  template: `
      <img 
        [src]="album.images[0].url" 
        class="cover"
        [ngClass]="{playing: active}"
        >
        
  `,
  styleUrls: ['./album-list-item.component.css']
})
export class AlbumListItemComponent {
  @Input() active: boolean;
  @Input() album: any;
  @HostBinding() className = 'cell';
}

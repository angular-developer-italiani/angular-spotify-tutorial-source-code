import { Component, EventEmitter, Output, Input, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'form-filter',
  template: `
    <form novalidate
      (ngSubmit)="search.emit(titleRef.value)">
        <div class="ui massive action input">
          <input type="text" 
            #titleRef 
            [value]="text"
            placeholder="Type an Artist Name">
          <button class="ui button">Search</button>
        </div>
    </form>

  `
})
export class FormFilterComponent {
  @Input() text = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();
}

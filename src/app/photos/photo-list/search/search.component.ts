import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'pg-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() search = new EventEmitter<string>();
  @Input() value = '';

  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

}

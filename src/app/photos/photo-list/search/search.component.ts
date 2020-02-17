import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'pg-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() searching = new EventEmitter<string>();
  @Input() value = '';

  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.searching.emit(filter));
  }

  ngOnDestroy() {
    this.debounce.unsubscribe();
  }

}

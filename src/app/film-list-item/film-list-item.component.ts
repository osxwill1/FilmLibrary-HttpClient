import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../shared/film';

@Component({
  selector: 'fl-film-list-item',
  templateUrl: './film-list-item.component.html',
  styleUrls: ['./film-list-item.component.css']
})
export class FilmListItemComponent implements OnInit {
  @Input() film: Film;

  ngOnInit() {
  }

}

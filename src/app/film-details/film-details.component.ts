import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/film';
import { ActivatedRoute } from '@angular/router';
import { FilmStoreService } from '../shared/film-store.service';

@Component({
  selector: 'fl-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  film: Film;

  constructor(
    private fs: FilmStoreService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const params = this.route.snapshot.paramMap;
    this.fs.getSingle(params.get('gtin'))
      .subscribe(f => this.film = f);
  }

  getRating(num: number) {
    return new Array(num);
  }

}

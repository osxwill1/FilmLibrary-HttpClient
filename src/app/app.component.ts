import { Component } from '@angular/core';

type ViewState = 'list' | 'details';

@Component({
  selector: 'fl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FilmLibrary';

}

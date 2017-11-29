import { Component } from '@angular/core';

import {Heros} from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Series of Heros';
}

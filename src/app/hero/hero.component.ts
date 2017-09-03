import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `<div>Hero: </div><app-sam>I am Hero</app-sam>`,
  styleUrls: ['../app.component.css']
})
export class HeroComponent {
  count = 5;
}

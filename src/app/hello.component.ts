import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-Project',
  template: `<h1> Project: {{name}} </h1>`,
  styleUrls: [ './app.component.css' ]
})
export class HelloComponent  {
  @Input() name: string;
}

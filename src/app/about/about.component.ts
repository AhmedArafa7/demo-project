import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-about',
  imports: [CardComponent, StarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

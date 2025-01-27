import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent, StarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from "./about/about.component";
import { CotantComponent } from "./cotant/cotant.component";
import { FooterComponent } from "./footer/footer.component";
import { NavComponent } from "./nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, AboutComponent, CotantComponent, FooterComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testang';
}

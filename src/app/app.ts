import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallBanner } from './small-banner/small-banner/small-banner';
import { SimplySection } from './section-component/simply-section/simply-section';
import { EspecialSection1 } from './especial-section-1/especial-section-1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SmallBanner, SimplySection, EspecialSection1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
      title = 'Centro oncologico veterinario';
      logo ='assets/img/ocov.png';
      logoFooter ='assets/img/ocov-white.png';
      wpIcon = 'assets/icon/wp-icon.png';
      igIcon = 'assets/icon/ig-icon.png';
      fcIcon = 'assets/icon/fc-icon.png';
}

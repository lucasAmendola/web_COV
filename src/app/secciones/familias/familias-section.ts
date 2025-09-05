import { Component } from '@angular/core';

import { RouterModule, RouterOutlet } from '@angular/router';
import { SmallBanner } from '../../small-banner/small-banner/small-banner';
import { SimplySection } from '../../section-component/simply-section/simply-section';
import { EspecialSection1 } from '../../especial-section-1/especial-section-1';
import { BgsComponent } from '../../bg-section/bgs-component/bgs-component';

@Component({
  selector: 'app-familias-section',
  imports: [RouterOutlet, SmallBanner, SimplySection, EspecialSection1, RouterModule, BgsComponent],
  templateUrl: './familias-section.html',
  styleUrl: './familias-section.css'
})
export class FamiliasSection {

}

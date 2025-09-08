import { Component } from '@angular/core';
import { BigBanner } from '../../big-banner/big-banner/big-banner';
import { SimplySection } from '../../section-component/simply-section/simply-section';
import { EspecialSection1 } from '../../especial-section-1/especial-section-1';

@Component({
  selector: 'app-veterinarios-section',
  imports: [BigBanner, SimplySection, EspecialSection1],
  templateUrl: './veterinarios-section.html',
  styleUrl: './veterinarios-section.css'
})
export class VeterinariosSection {

}

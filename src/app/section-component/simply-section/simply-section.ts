import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simply-section',
  standalone: true,     // 👈 IMPORTANTE  imports: [],
  templateUrl: './simply-section.html',
  styleUrl: './simply-section.css'
})
export class SimplySection {
      @Input() title: string = '';
      @Input() paragraph: string = '';
      @Input() style: string = '';
}

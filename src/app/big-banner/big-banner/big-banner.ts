import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-banner',
  imports: [],
  templateUrl: './big-banner.html',
  styleUrl: './big-banner.css'
})
export class BigBanner {
    @Input() imagen: string = '';
}

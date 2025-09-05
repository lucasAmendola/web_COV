import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
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

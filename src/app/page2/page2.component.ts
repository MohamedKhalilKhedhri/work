import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../gallery/content.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule,ContentComponent,NavbarComponent],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  genre="animal";
}

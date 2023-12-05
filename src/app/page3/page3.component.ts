import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../gallery/content.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [CommonModule,ContentComponent,NavbarComponent],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {
  title = "wa";
  
  genre="nature";
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContentComponent } from '../gallery/content.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [CommonModule,NavbarComponent,ContentComponent,HeaderComponent],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
 genre="people";

}

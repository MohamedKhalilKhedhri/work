import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gallery } from '../gallery';


import { animate,  style, transition, trigger } from '@angular/animations';

const animationfade = transition(':enter',[ style({ opacity: 0 }),animate('.3s ease-in-out', style({ opacity: 1 }))]);
const fadeIn = trigger('fadeIn', [animationfade]);

@Component({
  selector: 'app-modal-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-image.component.html',
  styleUrl: './modal-image.component.css',
  animations:[fadeIn],
})
export class ModalImageComponent {

  @Input() popUpImage!: string;
  @Input() description!: string;
  @Input() lecture!: string;
 

  @Output() updatePopUpImage = new EventEmitter();

  // Handeling the popup div existence (hidden | not)
  closePopUpHandler() {
    this.popUpImage = ''; // Reset the popup image
    this.updatePopUpImage.emit(this.popUpImage);
  }

   /************/ 
   @Input() gallery!: Gallery[];
 
   NextImg(): void {
    const currentIndex = this.gallery.findIndex((element) => element.url === this.popUpImage);

    if (currentIndex < this.gallery.length - 1) {
      
      this.popUpImage = this.gallery[currentIndex + 1].url;
      this.description = this.gallery[currentIndex + 1].decription;
      this.lecture = this.gallery[currentIndex + 1].lecture;
     
    } else {
      
      this.popUpImage = this.gallery[0].url;
      this.description = this.gallery[0].decription;
      this.lecture = this.gallery[0].lecture;
    }
  }

  PrevImg(): void {
    const currentIndex = this.gallery.findIndex((element) => element.url === this.popUpImage);

    if (currentIndex > 0) {
    
      this.popUpImage = this.gallery[currentIndex - 1].url;
      this.description = this.gallery[currentIndex - 1].decription;
      this.lecture = this.gallery[currentIndex - 1].lecture;
    } else{
     
      this.popUpImage = this.gallery[this.gallery.length - 1].url;
      this.description = this.gallery[this.gallery.length - 1].decription;
      this.lecture = this.gallery[this.gallery.length - 1].lecture;
    }
  }
 
}

import { Component,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';
import { Gallery } from '../gallery';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ModalImageComponent } from '../modal-image/modal-image.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    LazyLoadImageModule,
    ModalImageComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
 

})


export class ContentComponent {
 
  
  gallery!: Gallery[];
  popUpImage!: string;
  //Injecting data (importing the housing servie services)
  //filter gallery prePage

  
  @Input() filterType!:string;
  constructor(private housingService: HousingService) {}
  ngOnInit(): void {
    this.gallery = this.housingService.getHousingLocationFilter(this.filterType);
  
  }


  
  lecture!: string; // to check type of data (image or video)
  description!:string;
  // Catching the src of image clicked

  catchTypeSrc(src: string, description: string,lecture:string): void {
    this.popUpImage = src;
    this.description=description;
    this.lecture = lecture;
    console.log('clicked');
  
  }
  updatePopUpImageHandler(updatedPopUpImage: string): void {
    this.popUpImage = updatedPopUpImage;
  }
  
 
  //
  
  /**************************** */
  
}
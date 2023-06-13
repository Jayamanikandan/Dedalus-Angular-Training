import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-container',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.css']
})
export class GalleryContainerComponent {
  galleryList = [
    {
      title:"Gallery Image",
      color:"#5EB1CF"
    },
    {
      title:"Gallery Image",
      color:"#9FBC2E"
    },
    {
      title:"Gallery Image",
      color:"#F5BC3B"
    },
    {
      title:"Gallery Image",
      color:"#ED5758"
    }
  ];
}

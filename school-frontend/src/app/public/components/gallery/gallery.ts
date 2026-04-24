import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

interface Photo {
  url: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss']
})
export class Gallery {

  selectedImage: Photo | null = null;

  photos: Photo[] = [
    {
      url: 'https://images.unsplash.com/photo-1588072432836-e10032774350',
      title: 'School Building'
    },
    {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7',
      title: 'Classroom'
    },
    {
      url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754',
      title: 'Library'
    },
    {
      url: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178',
      title: 'Sports Event'
    },
    {
      url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94',
      title: 'Students Activity'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b',
      title: 'Science Lab'
    }
  ];

  openImage(photo: Photo) {
    this.selectedImage = photo;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
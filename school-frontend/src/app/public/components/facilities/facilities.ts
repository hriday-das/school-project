import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-facilities',
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './facilities.html',
  styleUrl: './facilities.scss',
})
export class Facilities {

}

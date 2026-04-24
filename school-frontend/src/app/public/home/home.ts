import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../components/navbar/navbar';
import { Hero } from '../components/hero/hero';
import { Features } from '../components/features/features';
import { Contact } from '../components/contact/contact';
import { About } from '../components/about/about';
import { Footer } from '../components/footer/footer';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Navbar, Hero, Features, Contact, About, Footer, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {}
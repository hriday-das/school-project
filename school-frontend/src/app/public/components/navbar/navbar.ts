import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { About } from '../about/about';


@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, About],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}

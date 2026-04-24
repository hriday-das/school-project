import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header';
import { FooterComponent } from '../shared/footer/footer';
import { LoaderService } from '../services/loader';
import { ToastService } from '../services/toast';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})

export class LayoutComponent {
  constructor(public loader: LoaderService, public toast: ToastService) {}

}
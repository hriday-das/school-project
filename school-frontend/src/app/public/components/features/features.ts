import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule , FormsModule, RouterLink],
  templateUrl: './features.html',
  styleUrls: ['./features.scss'],
})
export class Features {
facilities = [
  { icon: '📚', title: 'Smart Classes' },
  { icon: '🏀', title: 'Sports Complex' },
  { icon: '💻', title: 'Computer Lab' },
  { icon: '🧪', title: 'Science Lab' }
];
}
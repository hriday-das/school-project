import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

interface Award {
  title: string;
  year: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './awards.html',
  styleUrls: ['./awards.scss']
})
export class Awards {
  awards: Award[] = [
    {
      title: 'Best School Award',
      year: '2024',
      description: 'Recognized as the best performing school in the district.',
      icon: '🏆'
    },
    {
      title: 'Excellence in Education',
      year: '2023',
      description: 'Awarded for outstanding academic results.',
      icon: '🎓'
    },
    {
      title: 'Sports Championship',
      year: '2024',
      description: 'Winners of inter-school sports competition.',
      icon: '🥇'
    },
    {
      title: 'Innovation Award',
      year: '2022',
      description: 'For implementing modern digital learning systems.',
      icon: '💡'
    }
  ];
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

interface Achiever {
  name: string;
  class: string;
  marks: string;
  image: string;
  rank: string;
}

@Component({
  selector: 'app-top-achievers',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './top-achievers.html',
  styleUrls: ['./top-achievers.scss']
})
export class TopAchievers {

  achievers: Achiever[] = [
    {
      name: 'Aarav Sharma',
      class: 'Class 10',
      marks: '98%',
      rank: '🥇 1st',
      image: 'https://randomuser.me/api/portraits/boys/1.jpg'
    },
    {
      name: 'Ananya Das',
      class: 'Class 12',
      marks: '97%',
      rank: '🥈 2nd',
      image: 'https://randomuser.me/api/portraits/girls/2.jpg'
    },
    {
      name: 'Rohan Gupta',
      class: 'Class 10',
      marks: '96%',
      rank: '🥉 3rd',
      image: 'https://randomuser.me/api/portraits/boys/3.jpg'
    },
    {
      name: 'Priya Sen',
      class: 'Class 12',
      marks: '95%',
      rank: '🏅 Top 5',
      image: 'https://randomuser.me/api/portraits/girls/4.jpg'
    }
  ];
}
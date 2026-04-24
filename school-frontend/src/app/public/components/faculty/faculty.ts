import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

interface Facultys {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [CommonModule, Navbar, Footer],
  templateUrl: './faculty.html',
  styleUrls: ['./faculty.scss']
})
export class Faculty {

  principal: Facultys = {
    name: 'Dr. Rajesh Sharma',
    role: 'Principal',
    image: 'https://randomuser.me/api/portraits/men/10.jpg'
  };

  teachers: Facultys[] = [
    {
      name: 'Anita Verma',
      role: 'Mathematics Teacher',
      image: 'https://randomuser.me/api/portraits/women/11.jpg'
    },
    {
      name: 'Suresh Kumar',
      role: 'Science Teacher',
      image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
    {
      name: 'Neha Singh',
      role: 'English Teacher',
      image: 'https://randomuser.me/api/portraits/women/13.jpg'
    }
  ];

  staff: Facultys[] = [
    {
      name: 'Ravi Das',
      role: 'Office Staff',
      image: 'https://randomuser.me/api/portraits/men/14.jpg'
    },
    {
      name: 'Sunita Roy',
      role: 'Librarian',
      image: 'https://randomuser.me/api/portraits/women/15.jpg'
    }
  ];
}
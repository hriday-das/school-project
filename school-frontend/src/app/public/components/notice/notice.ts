import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notice',
  standalone: true,                     
  imports: [CommonModule],             
  templateUrl: './notice.html',
  styleUrls: ['./notice.scss'],         
})
export class Notice {         
notices = [
  { title: 'Admissions Open 2026', date: '10 Apr 2026' },
  { title: 'Annual Sports Day', date: '15 Apr 2026' },
  { title: 'Exam Schedule Released', date: '20 Apr 2026' },
  { title: 'Holiday Notice', date: '25 Apr 2026' }
];

// duplicate for smooth scroll
get scrollingNotices() {
  return [...this.notices, ...this.notices];
}
}
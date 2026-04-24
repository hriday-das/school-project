import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfterViewInit, ElementRef } from '@angular/core';
import { Notice } from '../notice/notice';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, Notice],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class About implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const elements = this.el.nativeElement.querySelectorAll('.fade');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    elements.forEach((el: any) => observer.observe(el));
  }
}
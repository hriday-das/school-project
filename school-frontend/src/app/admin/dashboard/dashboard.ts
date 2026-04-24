import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent implements OnInit {

  totalStudents = 0;
  recentStudents: any[] = [];
  isLoading = true;

  constructor(private api: ApiService,private cd: ChangeDetectorRef ) {}

  ngOnInit() {
    this.loadDashboard();
  }

  loadDashboard() {
    this.isLoading = true;

    this.api.getStudents().subscribe({
      next: (res: any) => {
        const students = Array.isArray(res) ? res : [];

        this.totalStudents = students.length;

        // latest 5 students (based on createdAt if exists)
        this.recentStudents = students
          .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())
          .slice(0, 5);

        this.isLoading = false;
        this.cd.detectChanges();
      },
      error: () => {
        this.totalStudents = 0;
        this.recentStudents = [];
        this.isLoading = false;
        this.cd.detectChanges();
      }
    });
  }
}
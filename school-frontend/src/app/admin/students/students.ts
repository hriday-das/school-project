import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.html'
})
export class StudentsComponent implements OnInit {

  students!: Observable<any[]>;
  isLoading = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.isLoading = true;

    this.students = this.api.getStudents().pipe(
      map((res: any) => res.data || res),
      tap(() => this.isLoading = false),
      catchError(err => {
        console.error("ERROR:", err);
        this.isLoading = false;
        return of([]);
      })
    );
  }

  addStudent() {
    const data = {
      name: "Test User",
      class: "10",
      section: "A",
      phone: "9999999999",
      age: 15
    };

    this.api.addStudent(data).subscribe(() => {
      this.loadStudents();
    });
  }

  deleteStudent(id: string) {
    this.api.deleteStudent(id).subscribe(() => {
      this.loadStudents();
    });
  }

  trackByFn(index: number, item: any) {
    return item._id;
  }
}
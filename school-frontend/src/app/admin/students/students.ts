import { Component, OnInit, ChangeDetectorRef, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './students.html',
  styleUrl: './students.scss'
  
})
export class StudentsComponent implements OnInit {

  students: any[] = [];
  isLoading = true;

  constructor(
    private api: ApiService,
    private cd: ChangeDetectorRef ,private router: Router 
  ) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.isLoading = true;

    this.api.getStudents().subscribe({
      next: (res: any) => {
        console.log("DATA:", res);

        this.students = Array.isArray(res) ? res : [];
        this.isLoading = false;

        this.cd.detectChanges(); // 🔥 FORCE UI UPDATE
      },
      error: (err) => {
        console.error(err);
        this.students = [];
        this.isLoading = false;

        this.cd.detectChanges(); // 🔥 FORCE UI UPDATE
      }
    });
  }

  addStudent() {
    //const data = {
    //  name: "Test User",
    //  class: "10",
    //  section: "A",
    //  phone: "9999999999",
    //  age: 15
    //};

    //this.api.addStudent(data).subscribe(() => {
    //  this.loadStudents();
    //});
    this.router.navigate(['/admin/add-edit-student']);
  }
  editStudent(id: string) {
    this.router.navigate(['/admin/add-edit-student', id]);
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
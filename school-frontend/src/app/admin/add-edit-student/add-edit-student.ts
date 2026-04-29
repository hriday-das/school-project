import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { ApiService } from '../../services/api';

@Component({
  selector: 'app-add-edit-student',
  standalone: true, // ✅ REQUIRED
  imports: [CommonModule, FormsModule, RouterModule], // ✅ add
  templateUrl: './add-edit-student.html',
  styleUrl: './add-edit-student.scss',
})
export class AddEditStudent implements OnInit {

  student: any = {
    name: '',
    class: '',
    section: '',
    phone: '',
    age: null
  };

  isEditMode = false;
  studentId: string | null = null;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // check if edit mode
    this.studentId = this.route.snapshot.paramMap.get('id');

    if (this.studentId) {
      this.isEditMode = true;

      this.api.getStudentById(this.studentId).subscribe((res: any) => {
        this.student = res;
        this.cd.detectChanges(); // 🔥 force UI update
      });
    }
  }

  saveStudent() {
    if (!this.student.name || !this.student.class) {
      alert('Name and Class required');
      return;
    }

    if (this.isEditMode) {
      this.api.updateStudent(this.studentId, this.student).subscribe(() => {
        alert('Student updated');
        this.router.navigate(['/']);
      });
    } else {
      this.api.addStudent(this.student).subscribe(() => {
        alert('Student added');
        this.router.navigate(['/']);
      });
    }
  }
}
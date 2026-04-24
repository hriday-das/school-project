import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api';

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admission.html'
})
export class AdmissionComponent {

  form: any = {};

  constructor(private api: ApiService) {}

  submit() {
    this.api.submitAdmission(this.form).subscribe(() => {
      alert("Admission Submitted!");
      this.form = {};
    });
  }
}
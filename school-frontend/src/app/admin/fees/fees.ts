import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fees',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fees.html'
})
export class FeesComponent {

  form: any = {};

  constructor(private api: ApiService) {}

  submit() {
    this.api.addFee(this.form).subscribe(() => {
      alert("Fee Added");
      this.form = {};
    });
  }
}
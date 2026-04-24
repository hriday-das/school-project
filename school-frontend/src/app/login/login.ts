import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { ToastService } from '../services/toast';
import { LoaderService } from '../services/loader';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  username = '';
  password = '';
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastService,
    private loader: LoaderService
  ) {}

  onLogin() {

    this.loader.show(); // 🔥 show loader

    setTimeout(() => {

      if (this.auth.login(this.username, this.password)) {
        this.toast.show('Login Successful!', 'success');
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.error = 'Invalid Credentials';
      }

      this.loader.hide(); // 🔥 hide loader

    }, 1000); // simulate API delay
  }
}
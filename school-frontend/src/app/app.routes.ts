import { Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout';
import { DashboardComponent } from './admin/dashboard/dashboard';
import { StudentsComponent } from './admin/students/students';
import { FeesComponent } from './admin/fees/fees';

import { LoginComponent } from './login/login';
import { HomeComponent } from './public/home/home';
import { AdmissionComponent } from './public/admission/admission';
import { authGuard } from './guards/auth-guard';
import { Awards } from './public/components/awards/awards';
import { Gallery } from './public/components/gallery/gallery';
import { TopAchievers } from './public/components/top-achievers/top-achievers';
import { Faculty } from './public/components/faculty/faculty';
import { Facilities } from './public/components/facilities/facilities';

export const routes: Routes = [

  // 🌐 Public Pages
  { path: '', component: HomeComponent },
  { path: 'faculty', component: Faculty },
  { path: 'top-achievers', component: TopAchievers },
  { path: 'admission', component: AdmissionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'awards', component: Awards },
  { path: 'gallery', component: Gallery },
  { path: 'facilities', component: Facilities },

  // 🔐 Admin Layout (FIXED PATH)
  {
    path: 'admin',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'fees', component: FeesComponent }
    ]
  }
];
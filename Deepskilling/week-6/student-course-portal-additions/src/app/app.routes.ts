import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';
import { CourseListStoreDemoComponent } from './pages/course-list-store-demo/course-list-store-demo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses-store-demo', component: CourseListStoreDemoComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'profile', component: StudentProfileComponent, canActivate: [authGuard] },

  // HO7 Step 73: lazy loading with loadComponent (standalone equivalent of loadChildren)
  {
    path: 'enroll',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/enrollment-form/enrollment-form.component').then(m => m.EnrollmentFormComponent)
  },
  {
    path: 'enroll-reactive',
    canActivate: [authGuard],
    canDeactivate: [unsavedChangesGuard],
    loadComponent: () =>
      import('./pages/reactive-enrollment-form/reactive-enrollment-form.component').then(
        m => m.ReactiveEnrollmentFormComponent
      )
  },

  { path: '**', component: NotFoundComponent } // must stay last
];

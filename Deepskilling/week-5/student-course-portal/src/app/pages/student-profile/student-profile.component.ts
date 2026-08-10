import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  studentName = 'Your Name';
  // Enrolled-course list is wired up properly in Week 6 (services & DI)
}

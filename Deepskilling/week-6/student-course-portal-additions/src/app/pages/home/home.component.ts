import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';
  coursesAvailable = 0;
  enrolled = 3;
  gpa = 3.8;

  constructor(private courseService: CourseService) {}

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: courses => (this.coursesAvailable = courses.length),
      error: () => (this.coursesAvailable = 0)
    });
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}

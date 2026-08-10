import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  // HO3 Task 1, Step 25: loading state
  isLoading = true;

  searchTerm = '';
  selectedCourseId: number | null = null;

  courses: Course[] = [
    { id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Operating Systems', code: 'CS102', credits: 3, gradeStatus: 'pending' },
    { id: 3, name: 'Database Systems', code: 'CS103', credits: 4, gradeStatus: 'passed' },
    { id: 4, name: 'Computer Networks', code: 'CS104', credits: 3, gradeStatus: 'failed' },
    { id: 5, name: 'Web Development', code: 'CS105', credits: 2, gradeStatus: 'pending' }
  ];

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  // HO3 Task 1, Step 26: trackBy — Angular reuses/updates only changed DOM
  // nodes instead of destroying and re-creating every card on each change.
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  get filteredCourses(): Course[] {
    if (!this.searchTerm) return this.courses;
    return this.courses.filter(c =>
      c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
    const course = this.courses.find(c => c.id === courseId);
    if (course) course.enrolled = true;
  }
}

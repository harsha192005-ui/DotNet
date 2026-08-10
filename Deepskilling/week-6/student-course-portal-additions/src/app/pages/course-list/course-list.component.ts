import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget.component';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent, CourseSummaryWidgetComponent],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  isLoading = true;
  errorMessage = '';
  searchTerm = '';
  selectedCourseId: number | null = null;
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.searchTerm = this.route.snapshot.queryParamMap.get('search') ?? '';

    // HO8: real HTTP call via CourseService (backed by json-server)
    this.courseService.getCourses().subscribe({
      next: courses => (this.courses = courses),
      error: err => {
        this.errorMessage = err.message;
        this.isLoading = false;
      },
      complete: () => (this.isLoading = false)
    });
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }

  get filteredCourses(): Course[] {
    if (!this.searchTerm) return this.courses;
    return this.courses.filter(c => c.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  onSearchChange(): void {
    this.router.navigate(['courses'], { queryParams: { search: this.searchTerm || null } });
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
  }

  goToDetail(id: number): void {
    this.router.navigate(['courses', id]);
  }
}

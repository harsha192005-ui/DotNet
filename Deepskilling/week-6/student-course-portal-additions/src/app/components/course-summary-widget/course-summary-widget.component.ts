import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  template: `<p class="summary">Total courses in system: {{ total }}</p>`
})
export class CourseSummaryWidgetComponent implements OnInit {
  total = 0;
  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => (this.total = courses.length));
  }
}

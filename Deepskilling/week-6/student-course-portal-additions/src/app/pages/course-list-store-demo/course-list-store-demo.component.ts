import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';

// HO9 demo component: shows the full NgRx flow —
// dispatch -> effect -> HTTP -> success action -> reducer -> selector -> async pipe
@Component({
  selector: 'app-course-list-store-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list-store-demo.component.html'
})
export class CourseListStoreDemoComponent implements OnInit {
  courses$: Observable<Course[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  enrolledIds$: Observable<number[]>;

  constructor(private store: Store) {
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }

  toggleEnroll(courseId: number, enrolledIds: number[]): void {
    if (enrolledIds.includes(courseId)) {
      this.store.dispatch(unenrollFromCourse({ courseId }));
    } else {
      this.store.dispatch(enrollInCourse({ courseId }));
    }
  }
}

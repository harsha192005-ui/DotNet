import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EnrollmentState } from './enrollment.reducer';
import { selectAllCourses } from '../course/course.selectors';

export const selectEnrollmentState = createFeatureSelector<EnrollmentState>('enrollment');
export const selectEnrolledIds = createSelector(selectEnrollmentState, state => state.enrolledCourseIds);

// cross-slice selector: combine course state + enrollment state
export const selectEnrolledCourses = createSelector(
  selectAllCourses,
  selectEnrolledIds,
  (courses, ids) => courses.filter(c => ids.includes(c.id))
);

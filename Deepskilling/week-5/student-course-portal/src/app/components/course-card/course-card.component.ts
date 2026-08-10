import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnChanges {
  // HO2 Task 3: @Input / @Output
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();

  // HO3 Task 2: expand/collapse toggle
  isExpanded = false;

  // HO2 Task 2: ngOnChanges logging
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      console.log('course changed:', changes['course'].previousValue, '->', changes['course'].currentValue);
    }
  }

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  // HO3 Task 2, Step 32: getter keeps the template clean
  get cardClasses() {
    return {
      'card--enrolled': !!this.course.enrolled,
      'card--full': this.course.credits >= 4,
      expanded: this.isExpanded
    };
  }

  get borderColor(): string {
    switch (this.course.gradeStatus) {
      case 'passed': return 'green';
      case 'failed': return 'red';
      default: return 'grey';
    }
  }

  onEnrollClick(): void {
    this.enrollRequested.emit(this.course.id);
  }
}

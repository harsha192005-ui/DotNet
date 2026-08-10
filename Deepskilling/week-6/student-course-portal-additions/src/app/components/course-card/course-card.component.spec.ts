import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseCardComponent } from './course-card.component';
import { Course } from '../../models/course.model';

const mockCourse: Course = {
  id: 1,
  name: 'Data Structures',
  code: 'CS101',
  credits: 4,
  gradeStatus: 'passed'
};

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCardComponent] // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the course name from @Input', () => {
    const h3 = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(h3.textContent).toContain('Data Structures');
  });

  it('should toggle to "Unenroll" after clicking Enroll', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.textContent).toContain('Enroll');

    button.click();
    fixture.detectChanges();

    expect(button.textContent).toContain('Unenroll');
  });

  it('should reflect gradeStatus in the badge class', () => {
    const badge = fixture.debugElement.query(By.css('.badge')).nativeElement;
    expect(badge.classList).toContain('passed');
  });
});

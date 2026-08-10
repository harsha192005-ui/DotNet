import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { CourseListStoreDemoComponent } from './course-list-store-demo.component';

describe('CourseListStoreDemoComponent (NgRx)', () => {
  let fixture: ComponentFixture<CourseListStoreDemoComponent>;
  let store: MockStore;

  const initialState = {
    course: {
      courses: [{ id: 1, name: 'Data Structures', code: 'CS101', credits: 4, gradeStatus: 'passed' }],
      loading: false,
      error: null
    },
    enrollment: { enrolledCourseIds: [] }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListStoreDemoComponent],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListStoreDemoComponent);
    store = TestBed.inject(MockStore);
  });

  it('should render course cards from the mocked store state', () => {
    fixture.detectChanges();
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toBe(1);
  });

  it('should show the loading message when loading = true', () => {
    store.setState({ ...initialState, course: { ...initialState.course, courses: [], loading: true } });
    fixture.detectChanges();

    const loadingText = fixture.debugElement.query(By.css('p'))?.nativeElement.textContent;
    expect(loadingText).toContain('Loading from store');
  });
});

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  // HO2 Task 1: property + event + two-way binding
  portalName = 'Student Course Portal';
  isPortalActive = true;
  message = '';
  searchTerm = '';

  // HO1 Task 2: hardcoded stats
  coursesAvailable = 12;
  enrolled = 3;
  gpa = 3.8;

  onEnrollClick(): void {
    this.message = 'Enrollment opened!';
  }

  // HO2 Task 2: lifecycle hooks
  ngOnInit(): void {
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }
}

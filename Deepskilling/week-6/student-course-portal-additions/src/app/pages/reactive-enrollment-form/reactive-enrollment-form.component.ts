import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder, FormGroup, FormArray, FormControl, Validators,
  ReactiveFormsModule, AbstractControl, ValidationErrors
} from '@angular/forms';
import { CanComponentDeactivate } from '../../guards/unsaved-changes.guard';

export function noCourseCode(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (value && value.toString().toUpperCase().startsWith('XX')) return { noCourseCode: true };
  return null;
}

export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(control.value?.toString().includes('test@') ? { emailTaken: true } : null);
    }, 800);
  });
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrls: ['./reactive-enrollment-form.component.css']
})
export class ReactiveEnrollmentFormComponent implements OnInit, CanComponentDeactivate {
  enrollForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: this.fb.control('', {
        validators: [Validators.required, Validators.email],
        asyncValidators: [simulateEmailCheck]
      }),
      courseId: ['', [Validators.required, noCourseCode]],
      preferredSemester: ['Odd', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([])
    });
  }

  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  addCourse(): void {
    this.additionalCourses.push(new FormControl('', Validators.required));
  }

  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // used by unsavedChangesGuard (HO7)
  hasUnsavedChanges(): boolean {
    return this.enrollForm.dirty && !this.submitted;
  }

  onSubmit(): void {
    if (this.enrollForm.invalid) {
      this.enrollForm.markAllAsTouched();
      return;
    }
    console.log('enrollForm.value:', this.enrollForm.value);
    console.log('enrollForm.getRawValue():', this.enrollForm.getRawValue());
    this.submitted = true;
    this.enrollForm.reset({ preferredSemester: 'Odd' });
  }
}

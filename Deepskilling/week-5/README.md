# Week 5 — Hands-On 1 to 5 (Student Course Portal)

This is a **complete, ready-to-run Angular project** covering Hands-On 1–5 from the exercise book.

## Setup
```
cd student-course-portal
npm install
ng serve
```
Open `http://localhost:4200`. Routes: `/`, `/courses`, `/profile`, `/enroll`, `/enroll-reactive`.

> If `npm install` complains about no `package.json`/`angular.json` — that's expected, this zip only
> has the `src/app` files. Generate a fresh project first (`ng new student-course-portal --routing
> --style=css`), then copy the `src/app` folder from this zip over the generated one (overwrite).

## What's in here, mapped to the book

| Hands-On | Topics | Files |
|---|---|---|
| **HO1** — Setup & first component | CLI setup, file structure, first components | `notes.txt`, `app.component.*`, `components/header/*`, `pages/home/*`, `pages/course-list/*`, `pages/student-profile/*` |
| **HO2** — Binding, lifecycle, @Input/@Output | interpolation, property/event/two-way binding, `ngOnInit`/`ngOnDestroy`/`ngOnChanges`, parent-child comms | `pages/home/home.component.ts` (bindings + hooks), `components/course-card/*` (`@Input`, `@Output`, `ngOnChanges`), `pages/course-list/course-list.component.ts` (`onEnroll`) |
| **HO3** — Directives & pipes | `*ngIf`/`*ngFor`/`*ngSwitch`, `trackBy`, `ngClass`/`ngStyle`, custom directive, custom pipe | `pages/course-list/*` (loading, trackBy, empty state), `components/course-card/*` (`ngSwitch` badge, `ngClass`/`ngStyle`), `directives/highlight.directive.ts`, `pipes/credit-label.pipe.ts` |
| **HO4** — Template-driven forms | `ngForm`, `ngModel`, validators, error messages | `pages/enrollment-form/*` (route `/enroll`) |
| **HO5** — Reactive forms | `FormBuilder`, custom validators, async validator, `FormArray` | `pages/reactive-enrollment-form/*` (route `/enroll-reactive`) |

## Quick test checklist
- Home (`/`): type in the search box, watch live text update; click **Enroll Now**; check console for init/destroy logs when navigating away and back.
- Courses (`/courses`): "Loading courses..." shows for 1.5s, then cards appear; hover a card for the yellow highlight; click **Enroll**, click **Show Details**.
- Template form (`/enroll`): leave fields blank and tab out — see red-border errors; fill correctly — green borders, Submit enables.
- Reactive form (`/enroll-reactive`): type `XX101` in Course ID — custom error; type `test@example.com` — "already taken" after ~800ms; add/remove extra course rows with the FormArray buttons.

## Push to git
```
git init   (if not already)
git add .
git commit -m "Week 5: Hands-On 1-5 - setup, binding, directives/pipes, forms"
git push
```

# Week 6 — Hands-On 6 to 10 (Student Course Portal, continued)

This zip is the **continuation** of the Week 5 project. It only contains the files that are
new or changed for Hands-On 6–10 — copy them over your existing `student-course-portal/src/app`
folder (overwrite files with the same name).

## Setup
```
npm install -g json-server
cd student-course-portal
npm install @ngrx/store @ngrx/effects @ngrx/store-devtools
json-server --watch db.json --port 3000        # in one terminal
ng serve                                        # in another terminal
```
Copy `db.json` from this zip into your project root (next to `angular.json`).
Install the **Redux DevTools** Chrome extension to inspect the NgRx store.

## What's in here, mapped to the book

| Hands-On | Topics | Files |
|---|---|---|
| **HO6** — Services & DI | `providedIn: 'root'` singleton, service-to-service injection, component-level provider | `services/course.service.ts`, `services/enrollment.service.ts`, `services/notification.service.ts`, `components/notification/*`, `components/course-summary-widget/*` |
| **HO7** — Routing, guards, lazy loading | route params, query params, `CanActivate`, `CanDeactivate`, lazy-loaded routes, 404 | `pages/course-detail/*`, `pages/not-found/*`, `guards/auth.guard.ts`, `guards/unsaved-changes.guard.ts`, `services/auth.service.ts`, `app.routes.ts` (`loadComponent`) |
| **HO8** — HttpClient, RxJS, interceptors | GET/POST/PUT/DELETE, `map`/`tap`/`catchError`/`retry`, 3 interceptors | `services/course.service.ts` (now HTTP-based), `interceptors/auth.interceptor.ts`, `interceptors/error-handler.interceptor.ts`, `interceptors/loading.interceptor.ts`, `services/loading.service.ts`, `db.json` |
| **HO9** — NgRx (actions, reducer, effects, selectors) | store setup, feature slices, cross-slice selector | `store/course/*`, `store/enrollment/*`, `pages/course-list-store-demo/*` (route `/courses-store-demo`), `app.config.ts` (`provideStore`, `provideEffects`) |
| **HO10** — Unit testing | Jasmine/Karma, TestBed, `HttpClientTestingModule`, `MockStore` | `components/course-card/course-card.component.spec.ts`, `services/course.service.spec.ts`, `pages/course-list-store-demo/course-list-store-demo.component.spec.ts` |

> Note: `CourseListComponent` (route `/courses`) uses plain `CourseService` + subscribe, the
> classic pattern. `CourseListStoreDemoComponent` (route `/courses-store-demo`) is a **separate**
> component that shows the same course list driven entirely through the NgRx store — dispatch →
> effect → HTTP → success action → reducer → selector → `async` pipe — without touching the
> working page you already built. Both are valid; the demo route exists purely to satisfy HO9's
> "trace the full flow in Redux DevTools" requirement without risking your working `/courses` page.

## Quick test checklist
- `/profile`: loads because `authGuard` sees `isLoggedIn = true`. Flip it to `false` in `auth.service.ts` to see the redirect to `/`.
- `/enroll-reactive`: type something then click a nav link — confirm dialog appears (unsaved-changes guard).
- Network tab: open `/enroll` — a separate JS chunk loads (lazy loading via `loadComponent`).
- Any API call: check **Request Headers** for `Authorization: Bearer mock-token-12345`.
- Turn off `json-server` → `/courses` shows the friendly error message from `catchError`.
- `/courses-store-demo`: Redux DevTools shows `[Course] Load Courses` → `[Course] Load Courses Success`.
- `ng test`: all three spec files should pass.

## Push to git
```
git add .
git commit -m "Week 6: Hands-On 6-10 - services/DI, routing/guards, HTTP/interceptors, NgRx, testing"
git push
```

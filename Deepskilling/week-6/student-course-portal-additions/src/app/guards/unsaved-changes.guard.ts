import { CanDeactivateFn } from '@angular/router';

// Any component using this guard must implement hasUnsavedChanges()
export interface CanComponentDeactivate {
  hasUnsavedChanges: () => boolean;
}

// HO7 Step 77: functional CanDeactivate guard
export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  if (component.hasUnsavedChanges()) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};

import { HttpInterceptorFn } from '@angular/common/http';

// HO8 Step 88: adds an Authorization header to every outgoing request
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cloned = req.clone({
    setHeaders: { Authorization: 'Bearer mock-token-12345' }
  });
  return next(cloned);
};

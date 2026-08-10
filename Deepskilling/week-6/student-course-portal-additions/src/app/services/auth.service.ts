import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // hardcoded for demo purposes — flip to false to test the guard redirect
  isLoggedIn = true;
}

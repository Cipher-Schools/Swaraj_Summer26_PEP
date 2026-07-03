import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const Auth = inject(AuthService);
  const router = inject(Router);

  console.log('AuthService', Auth);

  if(Auth.userLogIn()){
    console.log('User is logged in');
    router.navigate(['/home']);
  }
  
  return false;
};

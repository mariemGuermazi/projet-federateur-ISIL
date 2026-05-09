import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

function isTokenPresentAndValid(token: string | null): boolean {
  if (!token) {
    return false;
  }

  try {
    const payload = token.split('.')[1];
    const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = JSON.parse(atob(base64));
    const exp = decodedPayload?.exp;

    if (!exp) {
      return true;
    }

    return Date.now() < exp * 1000;
  } catch (error) {
    return false;
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (isTokenPresentAndValid(token)) {
    return true;
  }

  localStorage.removeItem('token');
  return router.createUrlTree(['/login'], {
    queryParams: { returnUrl: state.url || '/dashboard' }
  });
};

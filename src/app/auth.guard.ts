import { inject } from '@angular/core';
import { CanActivateFn,Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router);
  let Islogin=sessionStorage.getItem('Islogin');
  if(Islogin=='false'){
    alert('Please Login First');
    _router.navigate(['login']);
  }
  return true;
};

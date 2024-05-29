import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

export function popUpConfirm(title: string) {
  return Swal.fire({
    title: title,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Confirm',
  });
}

export function popUpSuccess(title: string) {
  return Swal.fire({
    title: title,
    icon: 'success',
  });
}

export function popUpFailed(title: string) {
  return Swal.fire({
    title: title,
    icon: 'error',
  });
}

export function showError(error: HttpErrorResponse) {
  if (error.status == 404) {
    popUpFailed('Not Found!');
  } else {
    popUpFailed('Failed!');
  }
}

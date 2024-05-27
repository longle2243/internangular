import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  popUpConfirm(title: string) {
    return Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm"
    });
  }

  popUpSuccess(title: string) {
    return Swal.fire({
      title: title,
      icon: "success"
    })
  }

  popUpFailed(title: string) {
    return Swal.fire({
      title: title,
      icon: "error"
    })
  }

  showError(error: any) {
    if (error.status == 404) {
      this.popUpFailed("Not Found!");
    } else {
      this.popUpFailed("Failed!");
    }
  }
}

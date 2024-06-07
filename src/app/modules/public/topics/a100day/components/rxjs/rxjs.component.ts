import { Component } from '@angular/core';
import {
  delay,
  from,
  fromEvent,
  fromEventPattern,
  interval,
  map,
  merge,
  of,
  throwError,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss',
})
export class RxjsComponent {
  constructor() {
    const observer = {
      next: (val: unknown) => console.log(val),
      error: (err: unknown) => console.log(err),
      complete: () => console.log('complete'),
    };

    // of(true).subscribe(observer);

    // From strans promise -> observable
    // from("[1, 2, 3]").subscribe(observer);
    // fromEvent(document, 'click').subscribe(observer);

    // fromEventPattern(
    //   (handler) => {
    //     document.addEventListener('click', handler);
    //   },
    //   (handler) => {
    //     document.removeEventListener('click', handler);
    //   }
    // ).subscribe(observer);

    // set
    // interval(1000).subscribe(observer)

    //  Sau 1 khoảng thời gian tự động complete
    // timer(1000).subscribe(observer);
    // timer(1000, 2000).subscribe(observer);

    // throwError('error').subscribe(observer);

    const users = [
      {
        id: 'ddfe3653-1569-4f2f-b57f-bf9bae542662',
        username: 'tiepphan',
        firstname: 'tiep',
        lastname: 'phan',
      },
      {
        id: '34784716-019b-4868-86cd-02287e49c2d3',
        username: 'nartc',
        firstname: 'chau',
        lastname: 'tran',
      },
    ];

    const usersVm = users.map(user => {
      return {
        ...user,
        fullname: `${user.firstname} ${user.lastname}`,
      };
    });

    // create observable with any value, emit -> complete
    // of(users)
    // .pipe(
    //   map(data => {
    //     console.log(data);
    //     return data;
    //   })
    // )
    // .subscribe(observer);

    // create observable with any value, emit -> complete (just give one value)
    // from(users)
    //   .pipe(
    //     map(data => {
    //       console.log(data);
    //       return data;
    //     })
    //   )
    //   .subscribe(observer);

    merge(of(users[0]).pipe(delay(1000)), of(users[1]).pipe(delay(5000)))
      .pipe(
        map(user => ({
          ...user,
          fullname: `${user.firstname} ${user.lastname}`,
        }))
      )
      .subscribe(observer);
  }
}

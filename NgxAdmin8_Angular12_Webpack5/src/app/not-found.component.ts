import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {

  constructor(
    private router: Router,
  ) {
  }

  goHome() {
    this.router.navigateByUrl('/');
  }
}

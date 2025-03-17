import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NavigationEnd, Router, RouterEvent, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showOptions = true;
  isLoggedIn = false;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem('user') != null;

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(r => {
      this.showOptions = location.pathname.search('/auth/') == -1;
    });
  }

  logout() {
    const logoutRes = window.confirm("Are you sure you wish to logout ?");
    if (logoutRes) {
      localStorage.clear();
      this.router.navigate(['/home']);
    }
  }
}

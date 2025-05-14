import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { LoadingErrorComponent } from './shared/loading-error/loading-error.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LoadingErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'blogging-app-ui';

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Check token validity on app initialization
    this.authService.checkToken().subscribe();
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { LoadingErrorComponent } from './shared/loading-error/loading-error.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, LoadingErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blogging-app-ui';
}

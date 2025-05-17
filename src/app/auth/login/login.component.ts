import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
  })

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  submit() {
    console.log("loginForm", this.loginForm);

    const email = this.loginForm.getRawValue().email!;
    const password = this.loginForm.getRawValue().password!;

    this.authService.login(email, password).subscribe((res: any) => {
      console.log("login", res);
      if (res && !res.error) {
        localStorage.setItem("authToken", res.authToken);
        const user = {
          _id: res._id,
          email: res.email,
          name: res.name,
          profileImageURL: res.profileImageURL,
          role: res.role,
        }
        localStorage.setItem("user", JSON.stringify(user));

        this.router.navigate(['/home']);
      }
    });
  }
}

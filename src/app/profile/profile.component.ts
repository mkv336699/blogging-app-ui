import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ToasterService } from '../services/toaster.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  user: any = {};
  userBlogs: any[] = [];
  baseURL = 'http://localhost:3000/';
  isUploading = false;
  uploadProgress = 0;

  constructor(
    private http: HttpClient,
    private toasterService: ToasterService
  ) {}

  ngOnInit() {
    this.loadUserData();
    this.loadUserBlogs();
  }

  loadUserData() {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
  }

  loadUserBlogs() {
    // Dummy data for now
    this.userBlogs = [
      {
        title: 'Getting Started with Angular',
        date: new Date(),
        likes: 42,
        comments: 12
      },
      {
        title: 'Advanced TypeScript Patterns',
        date: new Date(),
        likes: 28,
        comments: 8
      },
      {
        title: 'Building Responsive UIs',
        date: new Date(),
        likes: 35,
        comments: 15
      }
    ];
  }

  getTotalLikes(): number {
    return this.userBlogs.reduce((total, blog) => total + blog.likes, 0);
  }

  getTotalComments(): number {
    return this.userBlogs.reduce((total, blog) => total + blog.comments, 0);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.uploadProfilePicture(input.files[0]);
    }
  }

  uploadProfilePicture(file: File) {
    this.isUploading = true;
    this.uploadProgress = 0;

    const formData = new FormData();
    formData.append('profileImageURL', file);

    this.http.patch('http://localhost:3000/api/users/update-profile-pic', formData)
      .subscribe({
        next: (response: any) => {
          this.user.profileImageURL = response.data.profileImageURL;
          localStorage.setItem('user', JSON.stringify(this.user));
          this.toasterService.showSuccess('Profile picture updated successfully!');
          this.isUploading = false;
        },
        error: (error) => {
          this.toasterService.showError(error.message || 'Failed to update profile picture');
          this.isUploading = false;
        }
      });
  }

  triggerFileInput() {
    document.getElementById('profilePicInput')?.click();
  }
}

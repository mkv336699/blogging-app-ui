import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blog.service';
import { ToasterService } from '../../services/toaster.service';
import { Router } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-blog',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent {
  selectedFile: File | null = null;

  blogForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    coverImageURL: new FormControl(''),
  });

  constructor(
    private blogService: BlogService,
    private toasterService: ToasterService,
    private router: Router
  ) { }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    if (!this.selectedFile) {
      this.toasterService.showError('Please select a cover image');
      return;
    }

    const formData = new FormData();
    formData.append('title', this.blogForm.get('title')?.value || '');
    formData.append('body', this.blogForm.get('body')?.value || '');
    formData.append('coverImageURL', this.selectedFile);

    this.blogService.createBlog(formData).subscribe({
      next: (response: any) => {
        this.toasterService.showSuccess('Blog created successfully!');
        // Navigate to the blog view page
        this.router.navigate(['/blog', response.data._id]);
      },
      error: (error) => {
        this.toasterService.showError(error.message || 'Failed to create blog');
      }
    });
  }
}

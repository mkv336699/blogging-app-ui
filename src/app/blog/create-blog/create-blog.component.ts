import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-create-blog',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
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

  constructor(private blogService: BlogService) { }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit() {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('title', this.blogForm.get('title')?.value || '');
    formData.append('body', this.blogForm.get('body')?.value || '');
    formData.append('coverImage', this.selectedFile);

    this.blogService.createBlog(formData).subscribe((response) => {
      console.log('Blog created successfully:', response);
    });
  }
}

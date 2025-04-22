import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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

  blogForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
    coverImageURL: new FormControl(''),
  });

  onSubmit() {
    // TODO: Implement blog submission logic
    console.log('Blog submitted:', this.blogForm);
  }

}

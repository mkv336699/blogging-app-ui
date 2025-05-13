import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading-error',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatSnackBarModule],
  template: `
    <div *ngIf="loadingService.loading$ | async" class="loading-overlay">
      <mat-spinner></mat-spinner>
    </div>
    <div *ngIf="loadingService.error$ | async as error" class="error-snackbar">
      {{ error }}
    </div>
  `,
  styles: [`
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .error-snackbar {
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #f44336;
      color: white;
      padding: 16px;
      border-radius: 4px;
      z-index: 1000;
    }
  `]
})
export class LoadingErrorComponent {
  constructor(public loadingService: LoadingService) {}
} 
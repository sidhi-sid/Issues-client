import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateIssueRoutingModule } from './create-issue-routing.module';
import { CreateIssueComponent } from './create-issue.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [CreateIssueComponent],
  imports: [
    CommonModule,
    CreateIssueRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    RouterModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
  ],
})
export class CreateIssueModule {}

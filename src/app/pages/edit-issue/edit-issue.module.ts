import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditIssueRoutingModule } from './edit-issue-routing.module';
import { EditIssueComponent } from './edit-issue.component';


@NgModule({
  declarations: [
    EditIssueComponent
  ],
  imports: [
    CommonModule,
    EditIssueRoutingModule
  ]
})
export class EditIssueModule { }

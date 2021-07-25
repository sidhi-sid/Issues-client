import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ShowIssuesRoutingModule } from './show-issues-routing.module';
import { ShowIssuesComponent } from './show-issues.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ShowIssuesComponent],
  imports: [
    CommonModule,
    ShowIssuesRoutingModule,
    MatTableModule,
    MatButtonModule,
  ],
})
export class ShowIssuesModule {}

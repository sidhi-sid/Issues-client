import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowIssuesComponent } from './show-issues.component';
import { EditIssueComponent } from '../edit-issue/edit-issue.component';
const routes: Routes = [
  {
    path: '',
    component: ShowIssuesComponent,
  },
  {
    path: ':id',
    component: EditIssueComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowIssuesRoutingModule {}

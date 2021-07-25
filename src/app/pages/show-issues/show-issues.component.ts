import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Issue } from 'src/app/types/issue.type';
import { IssuesService } from '../../services/issues.service';
import * as fromApp from 'src/app/store/reducers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-issues',
  templateUrl: './show-issues.component.html',
  styleUrls: ['./show-issues.component.css'],
})
export class ShowIssuesComponent implements OnInit {
  issues: Issue[] = [];
  Index = 0;
  displayedColumns: string[] = [
    'index',
    'issueId',
    'projectName',
    'title',
    'priority',
    'action',
  ];

  dataSource: any;

  constructor(
    private store: Store<fromApp.AppState>,
    private issuesService: IssuesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.issuesService.getIssues();

    this.store.select('issue').subscribe((state) => {
      const issues = state.issueList;
      if (issues) this.processData(issues);
    });
  }

  processData(issues: any) {
    this.issues = [];
    issues.forEach((i: any) => {
      const issue: Issue = {
        id: i.id,
        projectName: i.projectName,
        title: i.title,
        priority: i.priority,
        description: i.description,
      };
      this.issues.push(issue);
    });
    this.dataSource = this.issues;
  }

  viewIssue(id: string) {
    this.router.navigate([`/${id}`]);
  }

  confirmDelete(issueId: string) {
    if (window.confirm('Do you really want to delete this issue?'))
      this.issuesService.deleteIssue(issueId);
  }
}

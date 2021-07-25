import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from './api.service';
import { Issue } from '../types/issue.type';
import * as IssuesActions from '../store/actions/issues.actions';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  constructor(private apiService: ApiService, private store: Store) {}

  getIssues() {
    this.apiService.fetchIssues().subscribe(
      (response) => {
        if (response.statusCode === 200) {
          const issues =
            response.data && response.data.issues ? response.data.issues : [];
          this.store.dispatch(new IssuesActions.UpdateIssues(issues));
        } else {
          this.store.dispatch(
            new IssuesActions.IssueError(response.statusMessage)
          );
        }
      },
      (error) => {
        this.store.dispatch(
          new IssuesActions.IssueError('Something went wrong')
        );
      }
    );
  }

  getIssue(id: any) {
    this.apiService.fetchIssue(id).subscribe(
      (response) => {
        if (response.statusCode === 200) {
          const issue =
            response.data && response.data.issue ? response.data.issue : [];
          this.store.dispatch(new IssuesActions.UpdateEditingIssue(issue));
        } else {
          this.store.dispatch(
            new IssuesActions.IssueError(response.statusMessage)
          );
        }
      },
      (error) => {
        this.store.dispatch(
          new IssuesActions.IssueError('Something went wrong')
        );
      }
    );
  }

  createIssue(issue: Issue) {
    this.apiService.createIssue(issue).subscribe(
      (response) => {
        if (response.statusCode === 200) {
          const issue = response.data.issue;
          this.store.dispatch(new IssuesActions.AddIssue(issue));
        } else {
          this.store.dispatch(
            new IssuesActions.IssueError(response.statusMessage)
          );
        }
      },
      (error) => {
        this.store.dispatch(
          new IssuesActions.IssueError('Something went wrong')
        );
      }
    );
  }

  updateIssue(id: string, issue: Issue) {
    return this.apiService.updateIssue(id, issue);
  }

  deleteIssue(id: string) {
    this.apiService.deleteIssue(id).subscribe(
      (response) => {
        if (response.statusCode === 200) {
          this.store.dispatch(new IssuesActions.DeleteIssue(id));
        }
      },
      (error) => {
        this.store.dispatch(
          new IssuesActions.IssueError('Something went wrong')
        );
      }
    );
  }
}

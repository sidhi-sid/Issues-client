import { Action } from '@ngrx/store';
import { Issue } from 'src/app/types/issue.type';

export const ADD_ISSUE = 'ADD_ISSUE';
export const UPDATE_ISSUES = 'UPDATE_ISSUE';
export const DELETE_ISSUE = 'DELETE_ISSUE';
export const UPDATE_EDITING_ISSUE = 'UPDATE_EDITING_ISSUE';
export const ISSUE_ERROR = 'ISSUE_ERROR';

export class AddIssue implements Action {
  readonly type = ADD_ISSUE;

  constructor(public payload: Issue) {}
}

export class UpdateIssues implements Action {
  readonly type = UPDATE_ISSUES;

  constructor(public payload: Issue[]) {}
}

export class DeleteIssue implements Action {
  readonly type = DELETE_ISSUE;

  constructor(public payload: string) {}
}

export class UpdateEditingIssue implements Action {
  readonly type = UPDATE_EDITING_ISSUE;

  constructor(public payload: Issue) {}
}

export class IssueError implements Action {
  readonly type = ISSUE_ERROR;

  constructor(public payload: string) {}
}

export type IssuesActionType =
  | AddIssue
  | UpdateIssues
  | DeleteIssue
  | UpdateEditingIssue
  | IssueError;

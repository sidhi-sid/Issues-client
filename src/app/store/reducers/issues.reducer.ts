import * as IssuesActions from '../actions/issues.actions';
import { Issue } from 'src/app/types/issue.type';

export interface State {
  issueList: Issue[];
  editingIssue: Issue | null;
  error: string;
}

const initialState: State = {
  issueList: [],
  editingIssue: null,
  error: '',
};

export function issuesReducer(
  state = initialState,
  action: IssuesActions.IssuesActionType
) {
  switch (action.type) {
    case IssuesActions.UPDATE_ISSUES:
      return {
        ...state,
        issueList: action.payload,
        error: '',
      };

    case IssuesActions.ADD_ISSUE:
      return {
        ...state,
        issueList: [action.payload, ...state.issueList],
      };

    case IssuesActions.DELETE_ISSUE:
      const issues = state.issueList.filter(
        (issue) => issue.id != action.payload
      );
      return {
        ...state,
        issueList: issues,
      };

    case IssuesActions.UPDATE_EDITING_ISSUE:
      return {
        ...state,
        editingIssue: action.payload,
      };

    case IssuesActions.ISSUE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

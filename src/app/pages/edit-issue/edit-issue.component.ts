import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IssuesService } from '../../services/issues.service';
import * as fromApp from 'src/app/store/reducers';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css'],
})
export class EditIssueComponent implements OnInit {
  issue: any;

  constructor(
    private store: Store<fromApp.AppState>,
    private issuesService: IssuesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var issueId = this.route.snapshot.paramMap.get('id');

    this.issuesService.getIssue(issueId);

    this.store.select('issue').subscribe((state) => {
      this.issue = state.editingIssue;
    });
  }
}

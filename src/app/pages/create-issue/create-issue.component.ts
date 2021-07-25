import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { IssuesService } from '../../services/issues.service';
import { Issue } from 'src/app/types/issue.type';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css'],
})
export class CreateIssueComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private issuesService: IssuesService
  ) {}

  issueFormGroup!: FormGroup;

  ngOnInit(): void {
    this.issueFormGroup = this._formBuilder.group({
      projectName: ['', Validators.required],
      title: ['', Validators.required],
      priority: ['', Validators.required],
      description: ['', Validators.maxLength(250)],
    });
  }

  get getControl() {
    return this.issueFormGroup.controls;
  }

  onSubmit() {
    const formValue = this.issueFormGroup.value;
    const issue: Issue = {
      projectName: formValue.projectName,
      title: formValue.title,
      priority: formValue.priority,
      description: formValue.description,
    };
    this.issuesService.createIssue(issue);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../types/issue.type';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiHostUrl = environment.api_host + '/api/issue';

  constructor(private http: HttpClient) {}

  fetchIssues(): Observable<any> {
    return this.http.get(this.apiHostUrl);
  }

  fetchIssue(id: string): Observable<any> {
    const url = this.apiHostUrl + `/${id}`;
    return this.http.get(url);
  }

  createIssue(issue: Issue): Observable<any> {
    return this.http.post(this.apiHostUrl, issue);
  }

  updateIssue(id: string, issue: Issue): Observable<any> {
    const url = this.apiHostUrl + `/${id}`;
    return this.http.put(url, issue);
  }

  deleteIssue(id: string): Observable<any> {
    const url = this.apiHostUrl + `/${id}`;
    return this.http.delete(url);
  }

  private getHeaders() {
    let header = new HttpHeaders();
    return header.set('Access-Control-Allow-Origin', '*');
  }
}

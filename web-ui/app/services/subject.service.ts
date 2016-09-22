import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from './../models/subject';
@Injectable()
export class SubjectService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private subjectUrl = 'app/subjects';  // URL to web api
  constructor(private http: Http) { }
  getSubjects(): Promise<Subject[]> {
    return this.http.get(this.subjectUrl)
      .toPromise()
      .then(response => response.json().data as Subject[])
      .catch(this.handleError);
  }
  getSubject(id: number): Promise<Subject> {
    return this.getSubjects()
      .then(subjects => subjects.find(subject => subject.id === id));
  }
  delete(id: number): Promise<void> {
    let url = `${this.subjectUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  create(name: string): Promise<Subject> {
    return this.http
      .post(this.subjectUrl, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  update(subject: Subject): Promise<Subject> {
    const url = `${this.subjectUrl}/${subject.id}`;
    return this.http
      .put(url, JSON.stringify(subject), { headers: this.headers })
      .toPromise()
      .then(() => subject)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Subject }                from './../../models/subject';
import { SubjectService }         from './../../services/subject.service';
@Component({
 // moduleId: module.id,

  selector: 'my-subject',
  templateUrl: 'app/components/subjects/subject.component.html',
  //styleUrls:  ['app/components/subject.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[];
  selectedSubject: Subject;
  constructor(
    private subjectService: SubjectService,
    private router: Router) { }
  getSubjects(): void {
    this.subjectService
      .getSubjects()
      .then(subjects => this.subjects = subjects);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.subjectService.create(name)
      .then(subject => {
        this.subjects.push(subject);
        this.selectedSubject = null;
      });
  }
  delete(subject: Subject): void {
    this.subjectService
      .delete(subject.id)
      .then(() => {
        this.subjects = this.subjects.filter(h => h !== subject);
        if (this.selectedSubject === subject) { this.selectedSubject = null; }
      });
  }
  ngOnInit(): void {
    this.getSubjects();
  }
  onSelect(subject: Subject): void {
    this.selectedSubject = subject;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedSubject.id]);
  }
}

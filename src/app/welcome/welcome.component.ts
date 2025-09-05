import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { mergeMap, delay, debounceTime } from 'rxjs/operators';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements AfterViewInit {
  @ViewChild('forth')
  forthBtn!: ElementRef<HTMLButtonElement>;
  users$!: Observable<any[]>;

  getUser3(): Observable<any[]> {
    return of([
      { id: '1', name: 'Magda', age: 18 },
      { id: '2', name: 'Marian', age: 17 },
      { id: '3', name: 'Aga', age: 20 },
      { id: '4', name: 'Ola', age: 15 },
    ]).pipe(delay(3000));
  }

  ngAfterViewInit(): void {
    this.users$ = fromEvent(this.forthBtn.nativeElement, 'click').pipe(
      debounceTime(200),
      mergeMap(() => this.getUser3())
    );
  }
}

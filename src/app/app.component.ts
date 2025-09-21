import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  Signal,
  signal,
  viewChild,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { Coords } from './types';
import {
  AsyncSubject,
  debounceTime,
  delay,
  exhaustMap,
  fromEvent,
  interval,
  map,
  merge,
  mergeMap,
  Observable,
  of,
  Subject,
  Subscription,
  take,
  takeUntil,
} from 'rxjs';
import { FooService } from './foo.service';
import { FooComponent } from './foo/foo.component';
import { PatternGeneratorComponent } from './pattern-generator/pattern-generator.component';
import { UserStatusComponentComponent } from './user-status-component/user-status-component.component';
import { AuthServiceService } from './services/auth-service.service';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { ValuesListComponent } from './values-list/values-list.component';
import { FormComponent } from './formularze/form/form.component';
import { ReactiveFormComponent } from './formularze/reactive-form/reactive-form.component';
import { HttpClientComponent } from './api/http-client/http-client.component';

type User = {
  id: string;
  name: string;
  age: number;
};

type Box = {
  r: number;
  g: number;
  b: number;
  x: number;
  y: number;
  width: number;
  height: number;
};

@Component({
  selector: 'app-root',
  imports: [
    FooComponent,
    PatternGeneratorComponent,
    UserStatusComponentComponent,
    PipesComponent,
    ValuesListComponent,
    FormComponent,
    ReactiveFormComponent,
    HttpClientComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [FooService],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('first')
  firstBtn!: ElementRef<HTMLButtonElement>;

  @ViewChild('second')
  secondBtn!: ElementRef<HTMLButtonElement>;

  @ViewChild('third')
  thirdBtn!: ElementRef<HTMLButtonElement>;

  watchdog = new Subject();
  counter1$ = interval(1000).pipe(takeUntil(this.watchdog));
  counter2$ = interval(2000).pipe(takeUntil(this.watchdog));
  counter3$ = interval(4000).pipe(takeUntil(this.watchdog));

  stop() {
    this.watchdog.next(-1);
    this.watchdog.complete();
  }

  @ViewChild('btn', { static: true }) button!: ElementRef<HTMLButtonElement>;

  @ViewChild('secondBtn', { static: true })
  buttonSecond!: ElementRef<HTMLButtonElement>;

  counters$ = new Observable<number>((observer) => {
    let counter = 1;

    let interval = setInterval(() => {
      observer.next(counter);
      counter++;
    }, 1000);

    return {
      unsubscribe() {
        clearInterval(interval);
      },
    };
  });
  counter: WritableSignal<number> = signal(10);

  userStatus!: Signal<'autorized' | 'unautorized'>;

  doubleCounter: Signal<number> = computed(() => {
    console.log('Runnning doubleCounter signal');
    return this.counter() * 2;
  });

  valueDetection = 'change-detection';

  randomNumber: number = Math.round(Math.random() * 255);
  visible: boolean = true;
  usersOne: string[] = ['Marcin'];

  value = 'lorem ipsumik';
  coords: Coords[] = [];
  boxses: Box[] = [];

  isLogged: boolean | null = null;

  left = 100;
  top = 700;
  myChange: number = 0;
  myRandomNumbers: number[] = [];
  isActive = true;
  shouldBeVisable = false;
  values: number[] = [1, 2, 3, 4, 5];
  title = 'agnular-course';

  adults$ = this.getUser().pipe(
    map((users) => users.filter((user) => user.age >= 18))
  );

  ifAdults$ = this.getUser().pipe(
    map((users) =>
      users.map((user) => ({
        ...user,
        age: user.age >= 18,
      }))
    )
  );

  logOut() {
    this.authSevice.logOut();
  }

  logIn() {
    this.authSevice.logIn();
  }

  logOutSubject() {
    this.authSevice.logOutSubject();
  }

  logInSubject() {
    this.authSevice.logInSubject();
  }

  theme: `light` | 'dark' = 'light';

  toggleTheme() {
    this.theme = this.theme === `dark` ? `light` : 'dark';
  }
  valuesOfDetection: number[] = [];

  numbers: number[] = [];

  private counter2: number = 0;
  private interval2!: number;

  private sub1!: Subscription;
  private sub2!: Subscription;
  public obsRandomValue!: Observable<number>;
  public randomValue: number = 0;
  timer!: Subscription;
  messenger!: Observable<string[]>;

  obs$!: Observable<number>;

  value2: number = 0;

  constructor(private authSevice: AuthServiceService) {
    this.userStatus = computed(() =>
      this.authSevice.isAuthenticated() ? 'autorized' : 'unautorized'
    );
    // this.value2 = this.fooService.getValue();
    // effect((onCleanup) => {
    //   document.title = this.counter().toString();
    //   const interval = setInterval(() => {
    //     console.log(`TICK`);
    //   }, this.counter() * 10);
    //   // console.log(`Counter value ${this.counter()}`);
    //   onCleanup(() => {
    //     clearInterval(interval);
    //   });
    // });
  }

  getData2(id: number): Observable<{ id: number; value: number }> {
    return of({
      id,
      value: Math.round(Math.random() * 1000),
    }).pipe(delay(Math.round(Math.random() * 5000) + 300));
  }

  ngAfterViewInit(): void {
    // fromEvent(this.button.nativeElement, 'click')
    //   .pipe(debounceTime(3000))
    //   .subscribe((val) => {
    //     console.log('click', val);
    //   });
    //   fromEvent(this.buttonSecond.nativeElement, 'click')
    //     .pipe(exhaustMap((_) => interval(1000).pipe(take(3))))
    //     .subscribe((val) => {
    //       console.log('click', val);
    //     });
    merge(
      fromEvent(this.firstBtn.nativeElement, 'click'),
      fromEvent(this.secondBtn.nativeElement, 'click'),
      fromEvent(this.thirdBtn.nativeElement, 'click')
    )
      .pipe(
        debounceTime(1000),
        mergeMap((_) => this.getData2(Math.round(Math.random() * 100)))
      )
      .subscribe(console.log);
  }

  getNewestData() {
    return {
      value: Math.round(Math.random() * 1000),
    };
  }
  // ngOnDestroy(): void {
  //   this.timer.unsubscribe();
  // }
  endOfTime() {
    this.timer.unsubscribe();
  }
  getData(id: number): Observable<string> {
    return of(id).pipe(
      delay(Math.round(Math.random() * 2000)),
      map((id) => `Resouce #${id}`)
    );
  }
  ngOnInit(): void {
    // const obs = interval(1000)
    //   .pipe(mergeMap((id) => this.getData(id)))
    //   .subscribe((val) => console.log(val));
    // const source1 = interval(1500).pipe(
    //   map((_) => `Source1: Lorem psum ${Math.round(Math.random() * 3000)}`),
    //   take(3)
    // );
    // const source2 = interval(2000).pipe(
    //   map((_) => `Source2: Dolor psum ${Math.round(Math.random() * 3000)}`)
    // );
    // this.messenger = merge(source1, source2).pipe(
    //   scan((acc: string[], curr) => [...acc, curr].slice(-5), [])
    // );
    //   this.timer = interval(1000)
    //     .pipe(
    //       map((_) => this.getNewestData())
    //       // take(5)
    //     )
    //     .subscribe((val) => console.log(val));
    //   const currentDate = new Date();
    //   currentDate.setSeconds(currentDate.getSeconds() + 5);
    //   timer(currentDate).subscribe((val) => console.log('Timer', val));
    // const counter$ = new Observable<number>((observer) => {
    //   let counter23 = 0;
    //   setInterval(() => {
    //     const repeat = Math.random() > 0.5;
    //     observer.next(repeat ? counter23 : counter23++);
    //   }, 100);
    // });
    // const counter2$ = new Observable<number>((observer) => {
    //   let counter23 = 0;
    //   setInterval(() => {
    //     observer.next(counter23);
    //     counter23 += 2;
    //   }, 100);
    // });
    // const mergeCounters = combineLatest([counter$, counter2$]).subscribe(
    //   (val) => {
    //     console.log(val);
    //   }
    // );
    // const forkedCounter = forkJoin([
    //   counter$.pipe(take(5)),
    //   counter2$.pipe(take(7)),
    // ]).subscribe((val) => {
    //   console.log(val);
    // });
    // counter$ // .pipe(take(5), debounceTime(300))
    //   .pipe(distinctUntilChanged())
    //   .subscribe((val) => console.log(val));
    // counter23
    //   .pipe(
    //     filter((el) => el % 2 == 0),
    //     map((el) => el ** 2),
    //     scan((acc, curr) => acc + curr)
    //   )
    //   .subscribe((val) => console.log(val));
    // const watchdog = new Observable<boolean>((observer) => {
    //   setTimeout(() => {
    //     observer.next(true);
    //   }, 5000);
    // });
    // counter23
    //   .pipe(
    //     startWith(1000),
    //     takeUntil(watchdog),
    //     tap((el) => console.log('Before filter', el)),
    //     filter((el) => el % 2 === 0)
    //   )
    //   .subscribe((val) => console.log(val));
    // const obs1 = of([1, 2, 3, 4]);
    // const obs2 = from([1, 2, 3, 4]);
    // obs1.subscribe((val) => console.log('OF', val));
    // obs2.subscribe((val) => console.log('FROM', val));
    // this.obs$ = new Observable<number>((observer) => {
    //   let counter = 0;
    //   setInterval(() => {
    //     observer.next(counter++);
    //   }, 1000);
    // }).pipe(filter((el) => el % 2 === 0));
    // const array = [1, 2, 3, 4, 5, 6, 7, 8];
    // const newArray = array
    //   .filter((val) => val % 2 === 0)
    //   .map((val) => val ** 2)
    //   .reduce((arr, curr) => arr + curr);
    // console.log(newArray);
    // this.obsRandomValue = new Observable<number>((observer) => {
    //   console.log('Observable start');
    //   const interval2 = setInterval(() => {
    //     console.log('tick');
    //     const value = Math.round(Math.random() * 2000);
    //     observer.next(value);
    //   }, 3000);
    //   return {
    //     unsubscribe() {
    //       console.log('Observable - unsubsribe');
    //       clearInterval(interval2);
    //     },
    //   };
    // });
    // this.interval2 = setInterval(() => {
    //   this.counter2++;
    // }, 1000) as unknown as number;
    // const observable = new Observable<number>((observer) => {
    //   console.log('Observable start');
    //   const interval2 = setInterval(() => {
    //     console.log('tick');
    //     const value = Math.round(Math.random() * 2000);
    //     observer.next(value);
    //   }, 3000);
    //   return {
    //     unsubscribe() {
    //       console.log('Observable - unsubsrive');
    //       clearInterval(interval2);
    //     },
    //   };
    // });
    // const observable2 = new Observable((observer) => {
    //   setInterval(() => observer.next(this.counter2), 1000);
    // });
    // const promise = new Promise((resolve) => {
    //   console.log('Promise start');
    //   setTimeout(() => {
    //     const value2 = Math.round(Math.random() * 2000);
    //     resolve(value2);
    //   }, 3000);
    // });
    // setTimeout(() => {
    //   this.sub1 = observable.subscribe((val) => {
    //     this.randomValue = val;
    //     console.log('Observable 1 - 1 ', val);
    //   });
    //   this.sub2 = observable.subscribe((val) => {
    //     console.log('Observable1 1 - 1', val);
    //   });
    //   observable2.subscribe((val) => {
    //     console.log('Observable2 2 - 1', val);
    //   });
    //   observable2.subscribe((val) => {
    //     console.log('Observable2 2 - 2', val);
    //   });
    //   promise.then((val) => console.log('Promise', val));
    //   promise.then((val) => console.log('Promise2', val));
    // }, 2000);
    // setTimeout(() => {
    //   this.sub1.unsubscribe();
    //   this.sub2.unsubscribe();
    //   // }, 10000);
    // const obs = interval(1000).pipe(share());
    // obs.subscribe((val) => console.log('Sub1', val));
    // setTimeout(() => {
    //   obs.subscribe((val) => console.log('Sub2', val));
    // }, 1000);
    // const subject = new BehaviorSubject<number>(1000);
    // const subject = new ReplaySubject<number>(3, 500);
    // const subject = new AsyncSubject<number>();
    // subject.subscribe((val) => console.log('Sub1', val));
    // setTimeout(() => {
    //   subject.subscribe((val) => console.log('Sub2', val));
    // }, 2000);
    // subject.next(1);
    // subject.next(2);
    // subject.next(3);
    // subject.next(4);
    // subject.next(5);
    // interval(1000).subscribe(subject);
    // setTimeout(() => {
    //   subject.complete();
    // }, 5000);
  }
  users$ = this.getUser();

  getUser(): Observable<User[]> {
    const users: User[] = [
      { id: '1', name: 'Magda', age: 18 },
      { id: '2', name: 'Marian', age: 17 },
      { id: '3', name: 'Aga', age: 20 },
      { id: '4', name: 'Ola', age: 15 },
    ];

    return of(users).pipe(delay(1000));
  }

  getUser2(): Observable<User[]> {
    const users2: User[] = [
      { id: '1', name: 'Magda', age: Math.random() * 18 },
      { id: '2', name: 'Marian', age: Math.random() * 18 },
      { id: '3', name: 'Aga', age: Math.random() * 18 },
      { id: '4', name: 'Ola', age: Math.random() * 18 },
    ];
    return of(users2).pipe(delay(2000));
  }

  reset() {
    this.counter.set(1000);
  }
  increase() {
    this.counter.update((prev) => prev + 1);
  }

  decrease() {
    this.counter.update((prev) => prev - 1);
  }

  changeIt() {
    this.myChange = Math.round(Math.random() * 255);
  }

  addToTheTab() {
    this.myRandomNumbers.push(this.myChange);
    console.log('myRamdon', this.myChange);
  }

  toggleVisablity() {
    this.visible = !this.visible;
  }

  addUsers() {
    // this.usersOne.push((Math.random() * 100000).toFixed(2));
    this.usersOne = [...this.usersOne, (Math.random() * 100000).toFixed(2)];
  }

  changeValue() {
    this.value = 'Inna wartosc';
  }

  getName() {
    return 'Lorem ipsum z metody getName w appComponent';
  }

  trackUsersFn(index: number, user: { id: number; name: string }) {
    console.log('TRACK', index, user);
    return user.id;
  }

  formatOdd(odd: boolean) {
    if (odd) return 'is odd';
    return 'is even';
  }

  getStyles() {
    return {
      position: `absolute`,
      left: `${this.left}px`,
      top: `${this.top}px`,
    };
  }

  addBox() {
    const newBox: Box = {
      r: Math.round(Math.random() * 255),
      g: Math.round(Math.random() * 255),
      b: Math.round(Math.random() * 255),
      x: Math.round(Math.random() * 255),
      y: Math.round(Math.random() * 255),
      width: Math.round(Math.random() * 255) + 100,
      height: Math.round(Math.random() * 255) + 100,
    };
    this.boxses.push(newBox);
  }

  getStyles2(box: Box) {
    return {
      backgroundColor: `rgba(${box.r}, ${box.g}, ${box.b})`,
      height: `${box.height}px`,
      width: `${box.width}px`,
      left: `${box.x}px`,
      top: `${box.y}px`,
    };
  }

  handlewNewPosition(coords: Coords) {
    this.coords.push(coords);
  }

  changeName() {
    this.valueDetection = `Lorem ipsum`;
  }

  addNewValue() {
    const addNewValue = Math.round(Math.random() * 80);
    // this.valuesOfDetection.push(addNewValue);
    this.valuesOfDetection = [...this.valuesOfDetection, addNewValue];
  }

  addNewNumber() {
    const newValue = Math.round(Math.random() * 80);
    this.numbers.push(newValue);
  }

  handleNewValue(newValue: number) {
    this.numbers.push(newValue);
  }
}

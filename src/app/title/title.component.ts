import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent implements OnInit, OnDestroy, OnChanges {
  changeVisability() {
    throw new Error('Method not implemented.');
  }
  @Input() title: string = '';
  visible: boolean = true;

  interval!: number;
  counter: number = 0;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      console.log('interval', this.counter);
    }, 1000) as unknown as number;
    console.log('interval', this.interval);
  }

  ngOnDestroy(): void {
    console.log('zniszczono');
    clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('blabla', SimpleChange);
  }

  toggleVisablity() {
    this.visible = !this.visible;
  }
}

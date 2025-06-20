import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss',
})
export class TitleComponent implements OnInit, OnDestroy {
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

  toggleVisablity() {
    this.visible = !this.visible;
  }
}

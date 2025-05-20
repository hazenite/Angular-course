import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumberButtonComponent } from './random-number-button.component';

describe('RandomNumberButtonComponent', () => {
  let component: RandomNumberButtonComponent;
  let fixture: ComponentFixture<RandomNumberButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomNumberButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomNumberButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

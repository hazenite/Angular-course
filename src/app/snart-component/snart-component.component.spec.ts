import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnartComponentComponent } from './snart-component.component';

describe('SnartComponentComponent', () => {
  let component: SnartComponentComponent;
  let fixture: ComponentFixture<SnartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnartComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

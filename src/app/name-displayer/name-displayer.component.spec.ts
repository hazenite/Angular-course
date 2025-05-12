import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDisplayerComponent } from './name-displayer.component';

describe('NameDisplayerComponent', () => {
  let component: NameDisplayerComponent;
  let fixture: ComponentFixture<NameDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameDisplayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrazyBoxComponent } from './crazy-box.component';

describe('CrazyBoxComponent', () => {
  let component: CrazyBoxComponent;
  let fixture: ComponentFixture<CrazyBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrazyBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrazyBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

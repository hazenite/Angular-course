import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternGeneratorComponent } from './pattern-generator.component';

describe('PatternGeneratorComponent', () => {
  let component: PatternGeneratorComponent;
  let fixture: ComponentFixture<PatternGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatternGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatternGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

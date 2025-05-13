import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarConverterComponent } from './dollar-converter.component';

describe('DollarConverterComponent', () => {
  let component: DollarConverterComponent;
  let fixture: ComponentFixture<DollarConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DollarConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DollarConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

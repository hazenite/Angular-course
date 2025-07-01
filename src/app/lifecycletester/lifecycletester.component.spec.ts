import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycletesterComponent } from './lifecycletester.component';

describe('LifecycletesterComponent', () => {
  let component: LifecycletesterComponent;
  let fixture: ComponentFixture<LifecycletesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycletesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycletesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

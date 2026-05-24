import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestB } from './test-b';

describe('TestB', () => {
  let component: TestB;
  let fixture: ComponentFixture<TestB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

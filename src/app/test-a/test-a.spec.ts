import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestA } from './test-a';

describe('TestA', () => {
  let component: TestA;
  let fixture: ComponentFixture<TestA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

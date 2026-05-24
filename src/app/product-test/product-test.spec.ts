import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTest } from './product-test';

describe('ProductTest', () => {
  let component: ProductTest;
  let fixture: ComponentFixture<ProductTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

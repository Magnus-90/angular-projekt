import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeteilComponent } from './product-detail-component';

describe('ProductDeteilComponent', () => {
  let component: ProductDeteilComponent;
  let fixture: ComponentFixture<ProductDeteilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDeteilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDeteilComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

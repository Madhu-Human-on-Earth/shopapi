import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopApiComponent } from './shop-api.component';

describe('ShopApiComponent', () => {
  let component: ShopApiComponent;
  let fixture: ComponentFixture<ShopApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopApiComponent]
    });
    fixture = TestBed.createComponent(ShopApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

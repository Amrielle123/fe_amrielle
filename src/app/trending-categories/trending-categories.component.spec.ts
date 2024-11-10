import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCategoriesComponent } from './trending-categories.component';

describe('TrendingCategoriesComponent', () => {
  let component: TrendingCategoriesComponent;
  let fixture: ComponentFixture<TrendingCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

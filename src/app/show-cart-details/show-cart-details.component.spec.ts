import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCartDetailsComponent } from './show-cart-details.component';

describe('ShowCartDetailsComponent', () => {
  let component: ShowCartDetailsComponent;
  let fixture: ComponentFixture<ShowCartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCartDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

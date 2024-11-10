import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFitComponent } from './custom-fit.component';

describe('CustomFitComponent', () => {
  let component: CustomFitComponent;
  let fixture: ComponentFixture<CustomFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

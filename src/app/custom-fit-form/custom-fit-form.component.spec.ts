import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFitFormComponent } from './custom-fit-form.component';

describe('CustomFitFormComponent', () => {
  let component: CustomFitFormComponent;
  let fixture: ComponentFixture<CustomFitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomFitFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomFitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

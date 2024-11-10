import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterElementsComponent } from './footer-elements.component';

describe('FooterElementsComponent', () => {
  let component: FooterElementsComponent;
  let fixture: ComponentFixture<FooterElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

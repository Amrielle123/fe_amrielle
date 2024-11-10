import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylefileComponent } from './stylefile.component';

describe('StylefileComponent', () => {
  let component: StylefileComponent;
  let fixture: ComponentFixture<StylefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylefileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

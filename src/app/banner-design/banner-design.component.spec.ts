import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDesignComponent } from './banner-design.component';

describe('BannerDesignComponent', () => {
  let component: BannerDesignComponent;
  let fixture: ComponentFixture<BannerDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

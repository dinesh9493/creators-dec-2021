import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPptComponent } from './landing-ppt.component';

describe('LandingPptComponent', () => {
  let component: LandingPptComponent;
  let fixture: ComponentFixture<LandingPptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

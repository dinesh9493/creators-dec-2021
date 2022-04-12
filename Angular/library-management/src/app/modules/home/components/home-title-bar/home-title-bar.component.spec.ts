import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTitleBarComponent } from './home-title-bar.component';

describe('HomeTitleBarComponent', () => {
  let component: HomeTitleBarComponent;
  let fixture: ComponentFixture<HomeTitleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTitleBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

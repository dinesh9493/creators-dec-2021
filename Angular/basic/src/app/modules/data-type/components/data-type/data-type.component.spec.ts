import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTypeComponent } from './data-type.component';

describe('DataTypeComponent', () => {
  let component: DataTypeComponent;
  let fixture: ComponentFixture<DataTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

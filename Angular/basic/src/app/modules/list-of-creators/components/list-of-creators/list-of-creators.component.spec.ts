import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfCreatorsComponent } from './list-of-creators.component';

describe('ListOfCreatorsComponent', () => {
  let component: ListOfCreatorsComponent;
  let fixture: ComponentFixture<ListOfCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfCreatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

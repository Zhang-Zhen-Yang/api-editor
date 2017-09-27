import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySpaceComponent } from './display-space.component';

describe('DisplaySpaceComponent', () => {
  let component: DisplaySpaceComponent;
  let fixture: ComponentFixture<DisplaySpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeLayoutComponent } from './resize-layout.component';

describe('ResizeLayoutComponent', () => {
  let component: ResizeLayoutComponent;
  let fixture: ComponentFixture<ResizeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

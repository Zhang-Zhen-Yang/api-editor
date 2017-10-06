import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonacoSpaceComponent } from './monaco-space.component';

describe('MonacoSpaceComponent', () => {
  let component: MonacoSpaceComponent;
  let fixture: ComponentFixture<MonacoSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonacoSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonacoSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

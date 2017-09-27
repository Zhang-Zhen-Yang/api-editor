import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSpaceComponent } from './code-space.component';

describe('CodeSpaceComponent', () => {
  let component: CodeSpaceComponent;
  let fixture: ComponentFixture<CodeSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

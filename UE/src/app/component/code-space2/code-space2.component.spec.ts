import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSpace2Component } from './code-space2.component';

describe('CodeSpace2Component', () => {
  let component: CodeSpace2Component;
  let fixture: ComponentFixture<CodeSpace2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeSpace2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSpace2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

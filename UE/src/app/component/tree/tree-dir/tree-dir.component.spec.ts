import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDirComponent } from './tree-dir.component';

describe('TreeDirComponent', () => {
  let component: TreeDirComponent;
  let fixture: ComponentFixture<TreeDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

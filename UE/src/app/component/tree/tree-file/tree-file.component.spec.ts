import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeFileComponent } from './tree-file.component';

describe('TreeFileComponent', () => {
  let component: TreeFileComponent;
  let fixture: ComponentFixture<TreeFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

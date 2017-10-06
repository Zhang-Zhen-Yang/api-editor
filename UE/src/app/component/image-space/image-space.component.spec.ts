import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSpaceComponent } from './image-space.component';

describe('ImageSpaceComponent', () => {
  let component: ImageSpaceComponent;
  let fixture: ComponentFixture<ImageSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

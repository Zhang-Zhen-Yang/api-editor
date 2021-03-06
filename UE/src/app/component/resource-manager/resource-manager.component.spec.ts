import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceManagerComponent } from './resource-manager.component';

describe('ResourceManagerComponent', () => {
  let component: ResourceManagerComponent;
  let fixture: ComponentFixture<ResourceManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

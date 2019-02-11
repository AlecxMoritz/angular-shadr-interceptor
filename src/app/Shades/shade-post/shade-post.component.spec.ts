import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadePostComponent } from './shade-post.component';

describe('ShadePostComponent', () => {
  let component: ShadePostComponent;
  let fixture: ComponentFixture<ShadePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

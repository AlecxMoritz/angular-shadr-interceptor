import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeHomeComponent } from './shade-home.component';

describe('ShadeHomeComponent', () => {
  let component: ShadeHomeComponent;
  let fixture: ComponentFixture<ShadeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

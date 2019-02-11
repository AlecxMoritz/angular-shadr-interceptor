import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeEditComponent } from './shade-edit.component';

describe('ShadeEditComponent', () => {
  let component: ShadeEditComponent;
  let fixture: ComponentFixture<ShadeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

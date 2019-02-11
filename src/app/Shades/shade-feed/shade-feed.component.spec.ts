import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadeFeedComponent } from './shade-feed.component';

describe('ShadeFeedComponent', () => {
  let component: ShadeFeedComponent;
  let fixture: ComponentFixture<ShadeFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadeFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadeFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

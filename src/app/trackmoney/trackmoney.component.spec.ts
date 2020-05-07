import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackmoneyComponent } from './trackmoney.component';

describe('TrackmoneyComponent', () => {
  let component: TrackmoneyComponent;
  let fixture: ComponentFixture<TrackmoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackmoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

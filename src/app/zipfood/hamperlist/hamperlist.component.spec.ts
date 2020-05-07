import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamperlistComponent } from './hamperlist.component';

describe('HamperlistComponent', () => {
  let component: HamperlistComponent;
  let fixture: ComponentFixture<HamperlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamperlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamperlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

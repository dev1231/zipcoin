import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiprefillComponent } from './ziprefill.component';

describe('ZiprefillComponent', () => {
  let component: ZiprefillComponent;
  let fixture: ComponentFixture<ZiprefillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZiprefillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiprefillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

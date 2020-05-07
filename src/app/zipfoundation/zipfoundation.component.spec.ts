import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipfoundationComponent } from './zipfoundation.component';

describe('ZipfoundationComponent', () => {
  let component: ZipfoundationComponent;
  let fixture: ComponentFixture<ZipfoundationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipfoundationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipfoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

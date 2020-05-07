import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipfoodhomeComponent } from './zipfoodhome.component';

describe('ZipfoodhomeComponent', () => {
  let component: ZipfoodhomeComponent;
  let fixture: ComponentFixture<ZipfoodhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipfoodhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipfoodhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

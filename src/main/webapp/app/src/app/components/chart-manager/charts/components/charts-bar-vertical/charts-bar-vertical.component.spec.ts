import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsBarVerticalComponent } from './charts-bar-vertical.component';

describe('ChartsBarVerticalComponent', () => {
  let component: ChartsBarVerticalComponent;
  let fixture: ComponentFixture<ChartsBarVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsBarVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsBarVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

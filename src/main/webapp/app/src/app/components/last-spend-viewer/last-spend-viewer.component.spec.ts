import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSpendViewerComponent } from './last-spend-viewer.component';

describe('LastSpendViewerComponent', () => {
  let component: LastSpendViewerComponent;
  let fixture: ComponentFixture<LastSpendViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastSpendViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastSpendViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

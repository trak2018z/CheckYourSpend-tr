import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendDesingerComponent } from './spend-desinger.component';

describe('SpendDesingerComponent', () => {
  let component: SpendDesingerComponent;
  let fixture: ComponentFixture<SpendDesingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendDesingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendDesingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

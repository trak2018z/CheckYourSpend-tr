import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendManagerComponent } from './spend-manager.component';

describe('SpendManagerComponent', () => {
  let component: SpendManagerComponent;
  let fixture: ComponentFixture<SpendManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSmartphonesComponent } from './dashboard-smartphones.component';

describe('DashboardSmartphonesComponent', () => {
  let component: DashboardSmartphonesComponent;
  let fixture: ComponentFixture<DashboardSmartphonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSmartphonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSmartphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

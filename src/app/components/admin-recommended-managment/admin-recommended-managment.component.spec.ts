import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRecommendedManagmentComponent } from './admin-recommended-managment.component';

describe('AdminRecommendedManagmentComponent', () => {
  let component: AdminRecommendedManagmentComponent;
  let fixture: ComponentFixture<AdminRecommendedManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRecommendedManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRecommendedManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

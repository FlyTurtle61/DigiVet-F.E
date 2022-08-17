import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecommendedComponent } from './user-recommended.component';

describe('UserRecommendedComponent', () => {
  let component: UserRecommendedComponent;
  let fixture: ComponentFixture<UserRecommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecommendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

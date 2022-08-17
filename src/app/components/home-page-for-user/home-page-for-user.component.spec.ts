import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageForUserComponent } from './home-page-for-user.component';

describe('HomePageForUserComponent', () => {
  let component: HomePageForUserComponent;
  let fixture: ComponentFixture<HomePageForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageForUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

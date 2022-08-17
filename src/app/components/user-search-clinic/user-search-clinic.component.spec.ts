import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchClinicComponent } from './user-search-clinic.component';

describe('UserSearchClinicComponent', () => {
  let component: UserSearchClinicComponent;
  let fixture: ComponentFixture<UserSearchClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

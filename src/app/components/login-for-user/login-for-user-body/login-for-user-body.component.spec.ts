import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForUserBodyComponent } from './login-for-user-body.component';

describe('LoginForUserBodyComponent', () => {
  let component: LoginForUserBodyComponent;
  let fixture: ComponentFixture<LoginForUserBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginForUserBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginForUserBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

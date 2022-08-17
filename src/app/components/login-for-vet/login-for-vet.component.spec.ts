import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForVetComponent } from './login-for-vet.component';

describe('LoginForVetComponent', () => {
  let component: LoginForVetComponent;
  let fixture: ComponentFixture<LoginForVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginForVetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginForVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

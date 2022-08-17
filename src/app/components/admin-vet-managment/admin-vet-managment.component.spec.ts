import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVetManagmentComponent } from './admin-vet-managment.component';

describe('AdminVetManagmentComponent', () => {
  let component: AdminVetManagmentComponent;
  let fixture: ComponentFixture<AdminVetManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminVetManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVetManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

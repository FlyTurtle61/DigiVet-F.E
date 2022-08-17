import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCommentManagmentComponent } from './admin-comment-managment.component';

describe('AdminCommentManagmentComponent', () => {
  let component: AdminCommentManagmentComponent;
  let fixture: ComponentFixture<AdminCommentManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCommentManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCommentManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

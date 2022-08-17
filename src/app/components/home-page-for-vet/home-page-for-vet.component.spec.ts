import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageForVetComponent } from './home-page-for-vet.component';

describe('HomePageForVetComponent', () => {
  let component: HomePageForVetComponent;
  let fixture: ComponentFixture<HomePageForVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageForVetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageForVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetRecommendedComponent } from './vet-recommended.component';

describe('VetRecommendedComponent', () => {
  let component: VetRecommendedComponent;
  let fixture: ComponentFixture<VetRecommendedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetRecommendedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetRecommendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetCopyrightComponent } from './vet-copyright.component';

describe('VetCopyrightComponent', () => {
  let component: VetCopyrightComponent;
  let fixture: ComponentFixture<VetCopyrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetCopyrightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetCopyrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

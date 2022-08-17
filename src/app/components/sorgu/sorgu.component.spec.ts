import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorguComponent } from './sorgu.component';

describe('SorguComponent', () => {
  let component: SorguComponent;
  let fixture: ComponentFixture<SorguComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorguComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

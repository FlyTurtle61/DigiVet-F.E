import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetMeetingComponent } from './vet-meeting.component';

describe('VetMeetingComponent', () => {
  let component: VetMeetingComponent;
  let fixture: ComponentFixture<VetMeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetMeetingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

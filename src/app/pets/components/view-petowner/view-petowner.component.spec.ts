import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPetownerComponent } from './view-petowner.component';

describe('ViewPetownerComponent', () => {
  let component: ViewPetownerComponent;
  let fixture: ComponentFixture<ViewPetownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPetownerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPetownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

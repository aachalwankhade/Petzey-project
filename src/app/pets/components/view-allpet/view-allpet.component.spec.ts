import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllpetComponent } from './view-allpet.component';

describe('ViewAllpetComponent', () => {
  let component: ViewAllpetComponent;
  let fixture: ComponentFixture<ViewAllpetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllpetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

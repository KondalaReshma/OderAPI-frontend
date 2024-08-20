import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsandrefundsComponent } from './returnsandrefunds.component';

describe('ReturnsandrefundsComponent', () => {
  let component: ReturnsandrefundsComponent;
  let fixture: ComponentFixture<ReturnsandrefundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnsandrefundsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReturnsandrefundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

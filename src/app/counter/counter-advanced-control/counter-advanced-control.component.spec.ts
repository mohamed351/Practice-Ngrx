import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAdvancedControlComponent } from './counter-advanced-control.component';

describe('CounterAdvancedControlComponent', () => {
  let component: CounterAdvancedControlComponent;
  let fixture: ComponentFixture<CounterAdvancedControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterAdvancedControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterAdvancedControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterLabelComponent } from './counter-label.component';

describe('CounterLabelComponent', () => {
  let component: CounterLabelComponent;
  let fixture: ComponentFixture<CounterLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

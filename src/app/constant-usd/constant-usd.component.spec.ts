import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstantUsdComponent } from './constant-usd.component';

describe('ConstantUsdComponent', () => {
  let component: ConstantUsdComponent;
  let fixture: ComponentFixture<ConstantUsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstantUsdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstantUsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

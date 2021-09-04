import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Select2AuroraComponent } from './select2-aurora.component';

describe('Select2AuroraComponent', () => {
  let component: Select2AuroraComponent;
  let fixture: ComponentFixture<Select2AuroraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Select2AuroraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Select2AuroraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

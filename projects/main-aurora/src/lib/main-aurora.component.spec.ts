import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAuroraComponent } from './main-aurora.component';

describe('MainAuroraComponent', () => {
  let component: MainAuroraComponent;
  let fixture: ComponentFixture<MainAuroraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAuroraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAuroraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

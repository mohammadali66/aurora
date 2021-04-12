import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdfefffsComponent } from './sdfefffs.component';

describe('SdfefffsComponent', () => {
  let component: SdfefffsComponent;
  let fixture: ComponentFixture<SdfefffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdfefffsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdfefffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

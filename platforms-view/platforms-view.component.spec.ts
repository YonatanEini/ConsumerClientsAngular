import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsViewComponent } from './platforms-view.component';

describe('PlatformsViewComponent', () => {
  let component: PlatformsViewComponent;
  let fixture: ComponentFixture<PlatformsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformClientsViewComponent } from './platform-clients-view.component';

describe('PlatformClientsViewComponent', () => {
  let component: PlatformClientsViewComponent;
  let fixture: ComponentFixture<PlatformClientsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformClientsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformClientsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

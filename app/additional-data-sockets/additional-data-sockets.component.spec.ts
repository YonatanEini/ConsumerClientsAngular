import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalDataSocketsComponent } from './additional-data-sockets.component';

describe('AdditionalDataSocketsComponent', () => {
  let component: AdditionalDataSocketsComponent;
  let fixture: ComponentFixture<AdditionalDataSocketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalDataSocketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalDataSocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

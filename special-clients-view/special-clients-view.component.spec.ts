import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialClientsViewComponent } from './special-clients-view.component';

describe('SpecialClientsViewComponent', () => {
  let component: SpecialClientsViewComponent;
  let fixture: ComponentFixture<SpecialClientsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialClientsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialClientsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

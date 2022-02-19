import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketClientsViewComponent } from './socket-clients-view.component';

describe('SocketClientsViewComponent', () => {
  let component: SocketClientsViewComponent;
  let fixture: ComponentFixture<SocketClientsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocketClientsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketClientsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

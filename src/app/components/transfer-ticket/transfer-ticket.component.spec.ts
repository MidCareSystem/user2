import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferTicketComponent } from './transfer-ticket.component';

describe('TransferTicketComponent', () => {
  let component: TransferTicketComponent;
  let fixture: ComponentFixture<TransferTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TransferTicketComponent]
    });
    fixture = TestBed.createComponent(TransferTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsdetailComponent } from './contactsdetail.component';

describe('ContactsdetailComponent', () => {
  let component: ContactsdetailComponent;
  let fixture: ComponentFixture<ContactsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

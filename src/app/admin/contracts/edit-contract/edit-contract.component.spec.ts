import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContractComponent } from './edit-contract.component';

describe('EditContractComponent', () => {
  let component: EditContractComponent;
  let fixture: ComponentFixture<EditContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

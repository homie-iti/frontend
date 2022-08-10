import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditunitComponent } from './editunit.component';

describe('EditunitComponent', () => {
  let component: EditunitComponent;
  let fixture: ComponentFixture<EditunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditunitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

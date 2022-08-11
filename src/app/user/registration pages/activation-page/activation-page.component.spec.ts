import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationPageComponent } from './activation-page.component';

describe('ActivationPageComponent', () => {
  let component: ActivationPageComponent;
  let fixture: ComponentFixture<ActivationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

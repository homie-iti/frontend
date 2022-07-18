import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHomieComponentComponent } from './find-homie-component.component';

describe('FindHomieComponentComponent', () => {
  let component: FindHomieComponentComponent;
  let fixture: ComponentFixture<FindHomieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindHomieComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindHomieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

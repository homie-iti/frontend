import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSearchComponentComponent } from './main-search-component.component';

describe('MainSearchComponentComponent', () => {
  let component: MainSearchComponentComponent;
  let fixture: ComponentFixture<MainSearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSearchComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

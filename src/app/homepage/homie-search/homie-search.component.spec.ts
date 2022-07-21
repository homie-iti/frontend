import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomieSearchComponent } from './homie-search.component';

describe('HomieSearchComponent', () => {
  let component: HomieSearchComponent;
  let fixture: ComponentFixture<HomieSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomieSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

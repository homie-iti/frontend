import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpQuestionsComponent } from './help-questions.page';

describe('HelpQuestionsComponent', () => {
  let component: HelpQuestionsComponent;
  let fixture: ComponentFixture<HelpQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllHelpQuestionsComponent } from './get-all-help-questions.component';

describe('GetAllHelpQuestionsComponent', () => {
  let component: GetAllHelpQuestionsComponent;
  let fixture: ComponentFixture<GetAllHelpQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllHelpQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllHelpQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

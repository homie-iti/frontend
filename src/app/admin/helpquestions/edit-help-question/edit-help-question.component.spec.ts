import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHelpQuestionComponent } from './edit-help-question.component';

describe('EditHelpQuestionComponent', () => {
  let component: EditHelpQuestionComponent;
  let fixture: ComponentFixture<EditHelpQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHelpQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHelpQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

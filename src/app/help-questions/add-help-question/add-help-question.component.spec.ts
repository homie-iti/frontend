import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHelpQuestionComponent } from './add-help-question.component';

describe('AddHelpQuestionComponent', () => {
  let component: AddHelpQuestionComponent;
  let fixture: ComponentFixture<AddHelpQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHelpQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHelpQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

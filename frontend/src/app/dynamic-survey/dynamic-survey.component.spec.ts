import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSurveyComponent } from './dynamic-survey.component';

describe('DynamicSurveyComponent', () => {
  let component: DynamicSurveyComponent;
  let fixture: ComponentFixture<DynamicSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

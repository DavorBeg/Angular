import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcomponentsComponent } from './taskcomponents.component';

describe('TaskcomponentsComponent', () => {
  let component: TaskcomponentsComponent;
  let fixture: ComponentFixture<TaskcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskcomponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

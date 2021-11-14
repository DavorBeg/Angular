import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInserterComponent } from './task-inserter.component';

describe('TaskInserterComponent', () => {
  let component: TaskInserterComponent;
  let fixture: ComponentFixture<TaskInserterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInserterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInserterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

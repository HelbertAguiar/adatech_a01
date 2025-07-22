import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  @Input() title = '';
  @Input() tasks: Task[] = [];
  @Output() remove = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();
}

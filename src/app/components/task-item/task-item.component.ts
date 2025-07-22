import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() remove = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  onRemove() {
    this.remove.emit(this.task.id);
  }

  onToggle() {
    this.toggle.emit(this.task.id);
  }
}

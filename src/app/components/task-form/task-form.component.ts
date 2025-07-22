import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
  
  newTaskTitle: string = '';

  @Output() addTask = new EventEmitter<string>();

  onSubmit() {
    if (this.newTaskTitle.trim()) {
      this.addTask.emit(this.newTaskTitle.trim());
      this.newTaskTitle = '';
    }
  }
}

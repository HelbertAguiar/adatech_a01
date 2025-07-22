import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  tasks: Task[] = [];
  nextId = 1;

  handleAddTask(title: string) {
    this.tasks.push({ id: this.nextId++, title, completed: false });
  }

  handleRemoveTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  handleToggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  getPendingTasks(): Task[] {
    return this.tasks.filter(t => !t.completed);
  }
  
  getCompletedTasks(): Task[] {
    return this.tasks.filter(t => t.completed);
  }
  
  getCompletedCount(): number {
    return this.tasks.filter(t => t.completed).length;
  }
  
  
}

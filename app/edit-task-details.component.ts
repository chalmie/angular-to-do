import { Component, EventEmitter } from 'angular2/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
  <div class="task-form">
   <h3>Edit Description: </h3>
   <select class="filter" #newPriority>
     <option value="low" [selected]="task.priority === 'low'">Low</option>
     <option value="medium" [selected]="task.priority === 'medium'">Medium</option>
     <option value="high" [selected]="task.priority === 'high'">High</option>
   </select>
   <input placeholder="{{ task.description }}" class="col-sm-8 input-lg task-form" #newDescription/>
   <button (click)="editTask(newDescription, newPriority)" class="btn-success btn-lg add-button">Add</button>
 </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
  public onSubmitEditTask: EventEmitter<Task>;
  constructor(){
    this.onSubmitEditTask = new EventEmitter();
  }
  editTask(newDescription: HTMLInputElement, newPriority: HTMLSelectElement) {
    this.task.priority = newPriority.value;
    this.task.description = newDescription.value;
  }
}

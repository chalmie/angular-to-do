import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <select class="filter" #newPriority>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high" selected="selected">High</option>
    </select>
    <button (click)="addTask(newDescription, newPriority)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<Task>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(newDescription: HTMLInputElement, newPriority: HTMLSelectElement){
    console.log(newPriority.value);
    var newTask: Task = new Task(newDescription.value, newPriority.value, -1);
    this.onSubmitNewTask.emit(newTask);
    newDescription.value = '';
  }
}

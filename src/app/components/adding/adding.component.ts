import { Component, OnInit } from '@angular/core';
import { Task, TaskGroup } from '../../models/task-list.model';
import { TaskService } from '../../services/taskservice/task.service';

@Component({
	selector: 'task-adding',
	templateUrl: 'adding.component.html',
	styleUrls: ['./adding.component.scss']
})

export class AddingComponent implements OnInit {
	title: string;
	folderTitle: string;
	description: string;
	due: Date;
	assignee: string;
	priority: number;
	adding: boolean = false;
	folderAdding: boolean = false;
	constructor(private taskService: TaskService) { }

	create() {
		this.adding = true;
	}

	createFolder() {
		this.folderAdding = true;
	}

	add() {
		let newTask = new Task(this.title, this.description, this.due, this.assignee, this.priority);
		this.taskService.add(newTask);
		this.clear();
	}

	addFolder() {
		let newFolder = new TaskGroup<Task>(this.folderTitle);
		this.taskService.addFolder(newFolder);
		this.clear();
	}

	clear() {
		this.adding = false;
		this.folderAdding = false;
		this.title = this.folderTitle = this.description = this.due = this.assignee = this.priority = undefined;
	}

	cancel() {
		this.clear();
	}

	ngOnInit() { }
}
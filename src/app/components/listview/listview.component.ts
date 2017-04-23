import { Component, OnInit } from '@angular/core';
import { Task, TaskGroup, TaskList } from '../../models/task-list.model';
import { TaskService } from '../../services/taskservice/task.service';

@Component({
	selector: 'listview',
	templateUrl: 'listview.component.html',
	styleUrls: ['./listview.component.scss']
})

export class ListviewComponent implements OnInit {
	tasklist: TaskList = new TaskList();
	popup: boolean = false;
	inFolder: boolean;
	task: Task;
	taskgroup: TaskGroup<Task>;
	constructor(private taskService: TaskService) { }

	ngOnInit() {
		this.tasklist = this.taskService.get();
	}

	open(task: Task) {
		this.inFolder = this.tasklist.tasks.includes(task);
		this.popup = true;
		this.task = task;
	}

	close() {
		this.inFolder = undefined;
		this.popup = false;
		this.task = undefined;
	}

	move() {
		this.taskService.move(this.task, this.taskgroup);
		this.task = this.taskgroup = undefined;
		this.popup = false;
	}

	delete(task: Task, folder?: TaskGroup<Task>) {
		this.taskService.remove(task, folder);
	}

}
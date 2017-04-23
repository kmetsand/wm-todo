import { Injectable } from '@angular/core';
import { Task, TaskList, TaskGroup, Comment } from '../../models/task-list.model';

@Injectable()
export class TaskService {
	tasklist: TaskList = new TaskList();

	constructor() {
		let content = JSON.parse(localStorage.getItem('todo-list-items'));
		if (content)
			this.tasklist.deserialize(content);
	}

	add(task: Task) {
		this.tasklist.add(task);
		this.updateStorage();
	}

	addFolder(taskGroup: TaskGroup<Task>) {
		this.tasklist.add(taskGroup);
		this.updateStorage();
	}

	get() {
		return this.tasklist;
	}

	getTask(id: string): Task {
		let task: Task;
		if (this.tasklist.getTask(id)) {
			task = this.tasklist.getTask(id);
		} else {
			this.tasklist.folders.forEach(folder => {
				if (folder.tasks.filter(task => task.id === id).length) {
					task = folder.tasks.filter(task => task.id === id)[0];
				}
			});
		}
		return task;
	}

	move(task: Task, folder?: TaskGroup<Task>) {
		if (folder) {
			this.tasklist.moveToFolder(task, folder);
			this.tasklist.remove(task);
		} else {
			let t: Task;
			let f: TaskGroup<Task>;
			this.tasklist.folders.forEach(folder => {
				if (folder.tasks.some(t => t.id === task.id)) {
					t = folder.tasks.filter(t => t.id === task.id)[0];
					f = folder;
				}
			});
			f.tasks.splice(f.tasks.indexOf(t), 1);
			this.tasklist.add(t);
		}

		this.updateStorage();
	}

	remove(task: Task, folder?: TaskGroup<Task>) {
		if (folder) {
			let f = this.tasklist.getFolder(folder.id);
			f.tasks.splice(f.tasks.indexOf(task), 1);
		} else {
			this.tasklist.remove(task);
		}
		this.updateStorage();
	}

	addComment(task: Task, comment: Comment) {
		let t: Task = this.getTask(task.id);
		t.comments.push(comment);
		this.updateStorage();
	}

	update(task: Task, data) {
		let t: Task = this.getTask(task.id);
		t.title = data.title;
		t.description = data.description;
		t.priority = data.priority;
		t.due = data.due;
		t.assignee = data.assignee;

		this.updateStorage();
	}

	updateStorage() {
		localStorage.setItem('todo-list-items', JSON.stringify(this.tasklist));
	}
}
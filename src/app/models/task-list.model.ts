export class TaskList {
	tasks: Array<Task>;
	folders: Array<TaskGroup<Task>>;

	constructor() {
		this.tasks = new Array<Task>();
		this.folders = new Array<TaskGroup<Task>>();
	}

	deserialize(input) {
		this.tasks = input.tasks as Array<Task>;
		this.folders = input.folders as Array<TaskGroup<Task>>;
	}

	add(data: Task | TaskGroup<Task>) {
		if (this.isTask(data)) {
			this.tasks.push(data as Task);
		}
		if (this.isTaskGroup(data)) {
			this.folders.push(data as TaskGroup<Task>);
		}
	}

	remove(data: Task | TaskGroup<Task>) {
		if (this.isTask(data)) {
			this.tasks.splice(this.tasks.indexOf(data), 1);
		}
		if (this.isTaskGroup(data)) {
			this.folders.splice(this.folders.indexOf(data), 1);
		}
	}

	getTask(id: string): Task {
		return this.tasks.filter(task => task.id === id)[0];
	}

	getFolder(id: string): TaskGroup<Task> {
		return this.folders.filter(folder => folder.id === id)[0] as TaskGroup<Task>;
	}

	moveToFolder(task: Task, folder: TaskGroup<Task>) {
		let f = this.getFolder(folder.id);
		let t = this.getTask(task.id);
		f.tasks.push(t);
	}

	private isTask(task: Task | TaskGroup<Task>): task is Task {
		return (<Task>task).created !== undefined;
	}

	private isTaskGroup(task: Task | TaskGroup<Task>): task is TaskGroup<Task> {
		return (<TaskGroup<Task>>task).tasks !== undefined;
	}
}

export class TaskGroup<Task> {
	readonly id: string;
	title: string;
	tasks: Array<Task>;

	constructor(title: string) {
		this.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
		this.title = title;
		this.tasks = new Array<Task>();
	}

	removeFromGroup(task: Task): Task {
		return this.tasks.splice(this.tasks.indexOf(task), 1)[0];
	}
}

export class Task {
	readonly id: string;
	title: string;
	description: string;
	readonly created: Date;
	due: Date;
	assignee: string;
	priority: number;
	readonly comments: Array<Comment>;

	constructor(title: string, description: string, due: Date, assignee: string, priority?: number) {
		this.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
			let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
		this.title = title;
		this.description = description;
		this.created = new Date();
		this.due = due;
		this.assignee = assignee;
		this.priority = priority;
		this.comments = new Array<Comment>();
	}
}

export class Comment {
	text: string;
	readonly date: Date;

	constructor(text: string) {
		this.text = text;
		this.date = new Date();
	}
}
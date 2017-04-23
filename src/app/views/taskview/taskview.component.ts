import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/taskservice/task.service';
import { Task, Comment } from '../../models/task-list.model';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'taskview',
	templateUrl: 'taskview.component.html',
	styleUrls: ['taskview.component.scss']
})

export class TaskviewComponent implements OnDestroy, OnInit {
	private ngUnsubscribe: Subject<void> = new Subject<void>();
	task: Task;
	text: string;
	editing: boolean = false;
	commenting: boolean = false;
	constructor(private route: ActivatedRoute, private router: Router, private service: TaskService) { }

	edit() {
		this.editing = true;
	}

	cancel() {
		this.editing = false;
	}

	addComment() {
		this.commenting = true;
	}

	saveComment() {
		this.service.addComment(this.task, new Comment(this.text));
		this.commenting = false;
	}

	cancelComment() {
		this.commenting = false;
	}

	save(form) {
		let task: Task = form.value;
		this.service.update(this.task, task);
		this.editing = false;
	}

	ngOnInit() {
		this.route.data
			.subscribe((data: { task: Task }) => {
				this.task = data.task;
			});
	}

	ngOnDestroy() {
		this.task = null;
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
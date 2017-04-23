import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { TaskService } from '../../services/taskservice/task.service';
import { Task } from '../../models/task-list.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskviewResolver implements Resolve<Task> {
	constructor(private service: TaskService, private router: Router) { }

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task> {
		let id = route.params['id'];
		return Observable.of(this.service.getTask(id));
	}
}
import { NgModule } from '@angular/core';
import { TaskService } from './taskservice/task.service';

@NgModule({
	providers: [
		TaskService
	]
})
export class ServiceModule { }
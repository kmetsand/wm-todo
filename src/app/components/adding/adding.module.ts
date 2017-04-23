import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddingComponent } from './adding.component';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/taskservice/task.service';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	declarations: [
		AddingComponent
	],
	exports: [
		AddingComponent
	],
	providers: [
		TaskService
	]
})
export class AddingModule { }

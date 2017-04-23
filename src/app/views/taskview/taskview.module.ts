import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskviewComponent } from './taskview.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule
	],
	exports: [],
	declarations: [TaskviewComponent],
	providers: [],
})
export class TaskviewModule { }

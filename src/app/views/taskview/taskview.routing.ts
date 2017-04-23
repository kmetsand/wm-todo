import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskviewComponent } from './taskview.component';
import { TaskviewResolver } from './taskview-resolver.service';

const routes: Routes = [
	{
		path: 'task/:id',
		component: TaskviewComponent,
		resolve: {
			task: TaskviewResolver
		}
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	],
	providers: [
		TaskviewResolver
	]
})

export class TaskviewRoutingModule { }

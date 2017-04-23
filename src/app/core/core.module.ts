import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreComponent } from './core.component';
import { ENV_PROVIDERS } from '../../environments/environment';

import { CoreRoutingModule } from './core.routing';
import { MainModule } from '../views/mainpage/main.module';

import { TaskviewRoutingModule } from '../views/taskview/taskview.routing';
import { TaskviewModule } from '../views/taskview/taskview.module';

@NgModule({
	imports: [
		BrowserModule,
		NgbModule,
		CoreRoutingModule,
		MainModule,
		TaskviewRoutingModule,
		TaskviewModule
	],
	declarations: [
		CoreComponent
	],
	providers: [
		ENV_PROVIDERS
	],
	bootstrap: [
		CoreComponent
	]
})
export class CoreModule { }

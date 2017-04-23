import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { ListviewModule } from '../../components/listview/listview.module';
import { AddingModule } from '../../components/adding/adding.module';

@NgModule({
	imports: [
		ListviewModule,
		AddingModule,
	],
	declarations: [
		MainComponent
	]
})
export class MainModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListviewComponent } from './listview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		NgbModule
	],
	declarations: [ListviewComponent],
	exports: [ListviewComponent]
})
export class ListviewModule { }

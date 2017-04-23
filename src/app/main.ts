import '../global.scss';
import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { IsProduction } from '../environments/environment';
import { CoreModule } from './core/core.module';

if (IsProduction) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CoreModule);

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'core-js/es7/array';
import 'zone.js';
import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'rxjs';
import 'intl';
import 'intl/locale-data/jsonp/en';

import { IsProduction } from '../environments/environment';

if (IsProduction) {

} else {
	Error['stackTraceLimit'] = Infinity;
	require('zone.js/dist/long-stack-trace-zone');
}

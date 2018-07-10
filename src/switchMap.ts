// restart interval every 5 seconds

import { timer, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

const source = timer(0, 5000);

const inter = () => interval(500);
const example = source.pipe(switchMap(inter));
example.subscribe(console.log);

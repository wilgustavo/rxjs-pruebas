import { range } from 'rxjs/observable/range';

const source = range(1, 10);
source.subscribe(console.log);

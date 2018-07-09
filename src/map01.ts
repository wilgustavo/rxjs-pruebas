// Ejemplo tomado de https://www.learnrxjs.io/operators/transformation/map.html

import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators';

const sumar10 = val => Number(val) + 10;

// emitir (1,2,3,4,5)
const source = from([1, 2, 3, 4, 5]);

// sumar 10 a cada uno
const example = source.pipe(map(sumar10));

example.subscribe(console.log);

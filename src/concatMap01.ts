// Demostrar la diferencia entre concatMap y mergeMap
// concatMap no suscribe al siguiente observable hasta que el previo no se complete.
// mergeMap suscribe inmediatamente todos los observables.

// https://www.learnrxjs.io/operators/transformation/concatmap.html

import { of } from 'rxjs/observable/of';
import { concatMap, delay, mergeMap } from 'rxjs/operators';

const delayms = val => of(`Demorado por ${val} ms.`).pipe(delay(val));
const source = of(3000, 1000);
const exampleConcat = source.pipe(concatMap(delayms));
const exampleMerge = source.pipe(mergeMap(delayms));

exampleConcat.subscribe(val => console.log(`concatMap: ${val}`));
exampleMerge.subscribe(val => console.log(`mergeMap: ${val}`));

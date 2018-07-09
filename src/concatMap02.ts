// Ejemplo de map  to promise

// https://www.learnrxjs.io/operators/transformation/concatmap.html

import { of } from 'rxjs/observable/of';
import { concatMap } from 'rxjs/operators';

const source = of('Hola', 'Adios');

const examplePromise = val => new Promise(resolve => resolve(`${val} Mundo!`));
const exampleConcat = source.pipe(concatMap(examplePromise));

exampleConcat.subscribe(console.log);

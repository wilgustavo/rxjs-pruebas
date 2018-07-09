import { of } from 'rxjs/observable/of';
import { concatMap } from 'rxjs/operators';

const source = of('Hola', 'Mundo');

const examplePromise = val => new Promise(resolve => resolve(`${val} Mundo!`));
const selector = val => `${val} w/ selector`;

// el resultado del primer parametro se pasa a la segunda funcion antes de retornar.
const example = source.pipe(concatMap(examplePromise, selector));
example.subscribe(console.log);
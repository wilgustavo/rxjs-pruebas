// Turn an array, promise, or iterable into an observable

import { from } from 'rxjs/observable/from';
import { concat } from 'rxjs/operators';

const getMap = () => {
  return new Map().set(1, 'Hola').set(2, 'Chau');
};

const sourceNumber = from([1, 2, 3, 4, 5]);
const sourcePromise = from(
  new Promise(resolve => resolve('Hello from promise'))
);
const sourceMap = from(getMap());
const sourceString = from('from string');

sourceNumber
  .pipe(concat(sourcePromise, sourceMap, sourceString))
  .subscribe(console.log);

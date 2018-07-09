// Ejemplo tomado de https://www.learnrxjs.io/operators/transformation/map.html

import { from } from 'rxjs/observable/from';
import { map } from 'rxjs/operators';

const users = [
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 20 },
  { name: 'Ann', age: 60 }
];

const getName = ({name}) => name; 
const source = from(users);
const example = source.pipe(map(getName));
example.subscribe(console.log);

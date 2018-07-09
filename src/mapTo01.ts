// https://www.learnrxjs.io/operators/transformation/mapto.html

import { interval } from 'rxjs/observable/interval';
import { mapTo } from 'rxjs/operators';

// emitir un valor cada 2 segundos
const source = interval(2000);

// convertir todas las emisiones a un solo valor
const example = source.pipe(mapTo('HELLO!'));

// imprimir resultado
example.subscribe(console.log);

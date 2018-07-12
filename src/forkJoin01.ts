import { forkJoin, of, interval } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const resMsg = (resolve, msg) => () => resolve(`Promise Resolved: ${msg}`);
const myPromise = val =>
  new Promise(resolve => setTimeout(resMsg(resolve, val), 5000));

const example = forkJoin(
  // emitir 'Hola' inmediatamente
  of('Hola'),

  // emitir 'Mundo' despues de 1 segundo
  of('Mundo').pipe(delay(1000)),

  // emitir 0 despues de un 1 segundo
  interval(1000).pipe(take(1)),

  // emitir 0,1 en un intervalo de un segundo (solo se toma el último)
  interval(1000).pipe(take(2)),

  // la pomesa se resuelve depues de 5 segundos
  myPromise('Result...')
);

example.subscribe(console.log);

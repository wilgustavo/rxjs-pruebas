import { interval } from 'rxjs';
import { take, map, combineAll } from 'rxjs/operators';

const take5 = val =>
  interval(1000).pipe(
    map(i => `Result (${val}): ${i}`),
    take(5)
  );
const source = interval(1000).pipe(take(2));
const example = source.pipe(map(take5));
const combined = example.pipe(combineAll());
combined.subscribe(console.log);

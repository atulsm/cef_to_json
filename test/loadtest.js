const cef = require('../src/cef');

const payload = 'CEF:0|Security|threatmanager2|1.0|100|worm successfully stopped|10|src=10.0.0.1 dst=2.1.2.2 spt=1232';
const count = 100000;

const t0 = new Date().getTime();
for (let i = 0; i < count; i += 1) {
  cef.toJson(payload);
}
const t1 = new Date().getTime();

console.log(`Processed ${count} data in ${t1 - t0} ms time at ${count * 1000 / (t1 - t0)} EPS`);

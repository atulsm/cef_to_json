const cef = require('../src/cef.js');

test('cef 0.1 header check', () => {
  expect(cef
    .toJson('CEF:0|Security|threatmanager2|1.0|100|worm successfully stopped|10|src=10.0.0.1 dst=2.1.2.2 spt=1232'))
    .toEqual({
      cefversion: '0',
      vendor: 'Security',
      product: 'threatmanager2',
      deviceversion: '1.0',
      classid: '100',
      name: 'worm successfully stopped',
      severity: '10',
      src: '10.0.0.1',
      dst: '2.1.2.2',
      spt: '1232',
    });
});

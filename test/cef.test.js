const cef = require('../src/cef.js');

test('cef 0.1  event format', () => {
  expect(cef
    .toJson('CEF:0|Security|threatmanager2|1.0|100|worm successfully stopped|10|src=10.0.0.1 dst=2.1.2.2 spt=1232'))
    .toEqual({
      cefVersion: '0',
      deviceVendor: 'Security',
      deviceProduct: 'threatmanager2',
      deviceVersion: '1.0',
      deviceEventClassId: '100',
      name: 'worm successfully stopped',
      agentSeverity: '10',
      src: '10.0.0.1',
      dst: '2.1.2.2',
      spt: '1232',
    });
});

test('cef 1.0  event format', () => {
  expect(cef
    .toJson('CEF:1|Security|threatmanager2|1.0|100|worm successfully stopped|10|src=10.0.0.1 dst=2.1.2.2 spt=1232'))
    .toEqual({
      cefVersion: '1',
      deviceVendor: 'Security',
      deviceProduct: 'threatmanager2',
      deviceVersion: '1.0',
      deviceEventClassId: '100',
      name: 'worm successfully stopped',
      agentSeverity: '10',
      src: '10.0.0.1',
      dst: '2.1.2.2',
      spt: '1232',
    });
});

test('Prefix to header', () => {
  expect(cef
    .toJson('Sep 19 08:26:10 host CEF:1|Security|threatmanager2|1.0|100|worm successfully stopped|10|src=10.0.0.1 dst=2.1.2.2 spt=1232'))
    .toEqual({
      cefVersion: '1',
      deviceVendor: 'Security',
      deviceProduct: 'threatmanager2',
      deviceVersion: '1.0',
      deviceEventClassId: '100',
      name: 'worm successfully stopped',
      agentSeverity: '10',
      headerPrefix: 'Sep 19 08:26:10 host',
      src: '10.0.0.1',
      dst: '2.1.2.2',
      spt: '1232',
    });
});

test('Empty header', () => {
  expect(cef
    .toJson('CEF:1|||||||src=10.0.0.1 dst=2.1.2.2 spt=1232'))
    .toEqual({
      cefVersion: '1',
      deviceVendor: '',
      deviceProduct: '',
      deviceVersion: '',
      deviceEventClassId: '',
      name: '',
      agentSeverity: '',
      src: '10.0.0.1',
      dst: '2.1.2.2',
      spt: '1232',
    });
});

test('Only header, no extensions', () => {
  expect(cef
    .toJson('Sep 19 08:26:10 host CEF:1|Security|threatmanager2|1.0|100|worm successfully stopped|10|'))
    .toEqual({
      cefVersion: '1',
      deviceVendor: 'Security',
      deviceProduct: 'threatmanager2',
      deviceVersion: '1.0',
      deviceEventClassId: '100',
      name: 'worm successfully stopped',
      agentSeverity: '10',
      headerPrefix: 'Sep 19 08:26:10 host',
    });
});

test('Invalid header', () => {
  expect(cef
    .toJson('Sep 19 08:26:10 host CEF:1|1.0|100|worm successfully stopped|10|src=10.0.0.1 dst=2.1.2.2 spt=1232'))
    .toBeUndefined();
});

test('Invalid event', () => {
  expect(cef
    .toJson('Random data string'))
    .toBeUndefined();
});

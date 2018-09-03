const cef = require('../src/cef.js');

test('cef 0.1 header check', () => {
  expect(cef.toJson("")).toEqual("");
});

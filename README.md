# cef_to_syslog
High performing parser to convert cef strings to json. Supports both CEF:0 and CEF:1 versions.

## Sample Usage:
```sh
const cef = require('cef_to_json')
console.log(cef.toJson(
'CEF:0|Security|threatmanager2|1.0|100|worm successfully stopped|10|src=10.0.0.1 dst=2.1.2.2 spt=1232'));
```

## Sample Output:
```sh
{
	cefVersion: '0',
  deviceVendor: 'Security',
  deviceProduct: 'threatmanager2',
  deviceVersion: '1.0',
  deviceEventClassId: '100',
  name: 'worm successfully stopped',
  agentSeverity: '10',
	src: '10.0.0.1',
	dst: '2.1.2.2',
	spt: '1232'
}
```

## Test cases (Refer cef.test.js):
```sh
$ npm run test

> cef_to_json@0.0.3 test .\cef_to_json
> jest

 PASS  test/cef.test.js
  √ cef 0.1  event format (6ms)
  √ cef 1.0  event format
  √ Prefix to header (1ms)
  √ Empty header (1ms)
  √ Only header, no extensions (1ms)
  √ Invalid header (29ms)
  √ Invalid event (4ms)
```

## Load test (Refer loadtest.js):
```sh
$ node test/loadtest.js
Processed 100000 data in 250 ms time at 400000 EPS
```

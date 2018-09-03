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
	cefversion: '0',
	vendor: 'Security',
	product: 'threatmanager2',
	deviceversion: '1.0',
	classid: '100',
	name: 'worm successfully stopped',
	severity: '10',
	src: '10.0.0.1',
	dst: '2.1.2.2',
	spt: '1232'
}
```

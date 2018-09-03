
/**
 * Converts CEF sring to json
 * @param {string} cefOrig The original String which is passed
 * @returns {JSON} Parsed CEF string
 */
function toJson(cefOrig) {
  const cefVerPos = cefOrig.indexOf('CEF:');
  if (cefVerPos < 0) {
    console.log('Cannot find CEF version. Probably not a valid CEF string');
    return undefined;
  }

  const cef = cefOrig.substring(cefVerPos).trim();
  const ret = {};

  ret.cefversion = cef.charAt(4);
  const headers = cef.split('|');
  if (headers.length < 7) {
    console.log('Cannot find a valid CEF header.');
    return undefined;
  }

  // extracting headers
  [ret.vendor, ret.product, ret.deviceversion, ret.classid, ret.name, ret.severity] = headers
    .slice(1, 7);

  if (headers.length === 7) {
    return ret;
  }

  // extracting extension fields which are in key=value format
  const re = /(\w*)=/g;
  const str = headers[7];
  const exts = [];
  /*eslint-disable*/
  while ((m = re.exec(str)) !== null) {
    exts.push({key:m[1], pos:m.index}); 
  }
  /* eslint-enable */

  exts.forEach((ext, index) => {
    let nextPos;
    if (index === (exts.length - 1)) {
      nextPos = str.length;
    } else {
      nextPos = exts[index + 1].pos;
    }
    ret[ext.key] = str.substring(ext.pos + ext.key.length + 1, nextPos).trim();
  });

  return ret;
}

module.exports = {
  toJson,
};

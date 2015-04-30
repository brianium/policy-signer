var fs = require('fs');
var crypto = require('crypto');

/**
 * Encode all the things. This function is a little barf.
 *
 * @param {String} path
 * @param {Function} callback
 */
function encode(path, callback) {
  try {
    fs.readFile(path, function (err, data) {
      if (err) {
        return callback(err, null);
      }
      
      callback(null, new Buffer(data).toString('base64'));
    });
  } catch (e) {
    callback(e, null);
  }
}

/**
 * Sign a message with the given key.
 *
 * @param {String} msg
 * @param {String} key
 * @return {String}
 */
function sign(msg, key) {
  var hmac = crypto.createHmac('sha1', key);
  hmac.update(msg);
  return hmac.digest('base64');
}

/**
 * Actually sign the policy
 *
 * @param {String} path
 * @param {String} key
 * @param {Function} callback
 */
exports.signPolicy = function(path, key, callback) {
  encode(path, function (err, data) {
    if (err) {
      return callback(err, null);
    }
    callback(null, data, sign(data, key));
  });
}


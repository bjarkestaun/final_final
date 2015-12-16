const randomString = Meteor.npmRequire('random-string')

import Codes from 'db/Codes'

// keep object with already used strings to avoid dublicates
// TODO: refactor to do this in a less stupid way
// TODO: also needs to clean used strings list when no longer used

var getRandomString = function (length) {
  return randomString({
    length: length,
    numeric: true,
    letters: false,
    special: false
  });
}

export default function (length) {
  var usedStrings = Codes.find({}).fetch().map(function (el) {
    return el.code;
  });
  console.log(usedStrings)
  var result;
  while (!result && usedStrings !== undefined) {
    result = getRandomString(length);
    result = usedStrings.indexOf(result) === -1 ? result : undefined;
  }
  Codes.insert({code: result})
  return result;
}

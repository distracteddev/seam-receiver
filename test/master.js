// A master tinyhook server for testing purposes
var Hook = require('tinyhook').Hook;

var options = {
  port: 1050,
  host: 'distracteddev.com'
};

var master = new Hook(options);

master.listen(function(err) {
  if (err) {
    throw err;
  }
});

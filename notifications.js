var request = require('request');


function join() {
  var args = [].slice.call(arguments);
  return args.join(': ');
}

function Notification(payload) {
  payload = payload || {};
  var action = '',
      type   = '';

  if (payload.type) {
    action  = payload.type.split('/')[0];
    type    = payload.type.split('/')[1];
  }
  this.title    = join(action.toUpperCase(), payload.name);
  this.subtitle = payload.url;
  //this.group    = ;
  this.message   = payload.message;
  this.open      = payload.url;
  this.activate  = payload.activate;
  this.execute = payload.execute || payload.command;

  var alertLevel = 'info';
  if (type === 'fail' || type === 'pass') {
    alertLevel = type;
  }
  var options = {
    url: 'http://localhost:1337/' + alertLevel,
    json: this,
    timeout: 3000,
    method: 'POST'
  };

  this.request = request.defaults(options).bind(this, {});
}

Notification.prototype.send =
function(callback) {
  this.request(function(err, res, data) {
    if (callback) {
      callback(err, data);
    }
  });
};


module.exports = Notification;

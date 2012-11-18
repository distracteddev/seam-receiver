function ok(expr, msg) {
  if (!expr) throw new Error(msg);
}

var Notification = require('../notifications'),
    should       = require('chai').should();

suite('Notification');

test('#exports', function (done) {
  Notification.should.be.a('function');
  done();
});

test('#init', function () {
  var notif = new Notification();
  notif.should.be.a('Object');
  notif.send.should.be.a('function');
});

var mock = {};
mock.name = 'Soapbox';
mock.type = 'deploy/fail';
mock.message  = 'Error: TypeError Blah Blah Blah';
mock.url = 'zeus.ly';

test('#sent', function(done) {
  var notif = new Notification(mock);
  notif.title.should.be.a('string');
  notif.subtitle.should.be.a('string');
  notif.message.should.be.a('string');
  notif.url.should.be.a('string');
  notif.send(done);
});

var Notification = require('./notifications');

module.exports = function(listener) {
  // debug listener
  listener.on('*::msg', function(d) {
    console.log(d);
  });

  //
  listener.on('*::notification', function(notif) {
    console.log(notif);
    notif = new Notification(notif);
    notif.send();
  });
};

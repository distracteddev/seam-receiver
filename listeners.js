var Notification = require('./notifications');

module.exports = function(listener) {
  // Listen for any notifcation since we care about all of them
  // (Seam, for now, is meant to be used by a single dev, or a small team)
  listener.on('*::notification', function(notif) {
    console.log(notif);
    notif = new Notification(notif);
    notif.send();
  });
};

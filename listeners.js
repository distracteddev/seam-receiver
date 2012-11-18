module.exports = function(listener) {
  // debug listener
  listener.on('*::msg', function(d) {
    console.log(d);
  });

  //
  listener.on('*::notification', function(notif) {
    console.log(notif);
  });
};

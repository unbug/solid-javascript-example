var Task = function(options) {
  options = options || {};

  this.title = options.title || "Something";
};

var TimedTask = function(options) {
  options = options || {};

  var that = new Task(options);
  that.starts_at = options.starts_at || new Date().getTime();

  return that;
}

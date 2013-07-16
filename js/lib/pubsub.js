var PubSub = function() {};

PubSub.prototype.subscribe = function(topic, callback, context) {
  this.topics = this.topics || {};
  this.topics[topic] = this.topics[topic] || []
  this.topics[topic].push({
    "callback" : callback
  , "context"  : (context || this)
  });
};

PubSub.prototype.publish = function(topic) {
  this.topics[topic].forEach(function (item) {
    item.callback.apply(item.context);
  });
};

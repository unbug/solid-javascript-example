Object.prototype.mixin = function(module) {
  for (method in module.prototype) {
    if (module.prototype.hasOwnProperty(method)) {
      this.prototype[method] = module.prototype[method];
    }
  }
};

var Tags = function() {};

Tags.prototype = {
  listTags: function() {
    this._tags = this._tags || [];
    return this._tags;
  }
, addTag: function(tag) {
    this._tags = this._tags || [];
    this._tags.push(tag);
    this.publish && this.publish("tagAdded");
  }
, removeTag: function(tag) {
    var tags = this._tags;
    tags.splice(tags.indexOf(tag),1);
  }

, countTags: function() {
    return this.listTags().length;
  }
};

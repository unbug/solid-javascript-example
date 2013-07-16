function getJSON(sample_url) {
  var promise = new RSVP.Promise(function(fulfill, unfulfill) {
    $.ajax({
      dataType : "json",
      url      : sample_url,
      success  : function(data) { fulfill(data); },
      error    : function(error) { unfulfill(data); }
    });
  });

  return promise;
}

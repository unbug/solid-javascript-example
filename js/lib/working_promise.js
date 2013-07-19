$(function() {
  getJSON("/examples/promised.json")
    .then(function(data) {
      alert("I did it!");
    }, function(errorData) {
      alert("Oops. If you have a console open, the error will show up.");
      console.log(errorData);
    });
});

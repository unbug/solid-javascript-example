describe("Promises", function() {
  it("is resolved", function(done) {
    var sample_url = "/examples/promised.json";
    var output = "";

    getJSON(sample_url)
    .then(function() {
      output += "JSON got back!";
    }, function(errorData) {
      // If you want to check the error being displayed, uncomment the debugger
      // statement and inspect `errorData[2]`.
      // debugger;
      expect(output).toEqual("JSON got back", "** Promise failed **");
      done();
    });

  });
});

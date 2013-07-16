describe("Promises", function() {
  it("is resolved", function(done) {
    var sample_url = "/examples/promised.json";
    var output = "";

    getJSON(sample_url)
    .then(function() {
      output += "JSON got back!";
    })
    .then(function() {
      expect(output).toEqual("JSON got back");
    });

    done();

  });
});

describe("counting tags", function() {
  it("prints the tag count via pubsub for each added tag", function() {
    var Class = function() {};
    var object = new Class();
    var output = "";

    Class.mixin.apply(Class,[ Tags ] );
    Class.mixin.apply(Class,[ PubSub ] );

    object.subscribe("tagAdded", function() {
      output = this.countTags().toString();
    });

    object.addTag("tutsplus");

    expect(output).toEqual("1");

  });
});

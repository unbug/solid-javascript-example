describe("Task", function() {
  it("has a title", function() {
    expect(new Task().title).toBeDefined();
  });

  it("can be set a title", function() {
    expect(new Task({ title: "Hello" }).title).toEqual("Hello");
  });
});

describe("TimedTask", function() {
  it("has a title", function() {
    expect(new TimedTask().title).toEqual("Something");
  });

  it("has a starting time", function() {
    expect(new TimedTask().starts_at).toBeGreaterThan("1373554165608");
  });
});

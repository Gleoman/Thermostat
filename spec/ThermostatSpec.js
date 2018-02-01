describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function() {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it("should up temp when instructed", function() {
    expect(thermostat.upTemp()).toEqual(21);
  });

  it("should decrease temp when instructed", function() {
    expect(thermostat.decreaseTemp()).toEqual(19);
  });

  it("should have a min temperature of 10", function() {
    expect(thermostat.min_temp).toEqual(10);
  });

  it("should raise an error if going below min temp", function() {
    thermostat.temp = thermostat.min_temp;
    expect(function() {
      thermostat.decreaseTemp();
    }).toThrowError("Minimum temperature reached");
  });

  it("should have a default max temperature of 32", function() {
    expect(thermostat.max_temp).toEqual(32);
  });

  it("should set the max temp to 25 if power saving on", function() {
    thermostat.powerSaving();
    expect(thermostat.max_temp).toEqual(25);
  });
});

'use strict';

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

  it("should have a min temperature of 10 degrees", function() {
    expect(thermostat.min_temp).toEqual(10);
  });

  it("should raise an error if going below min temp", function() {
    thermostat.temp = thermostat.min_temp;
    expect(function() {
      thermostat.decreaseTemp();
    }).toThrowError("Minimum temperature reached");
  });

  it("should have power saving on by default", function() {
    expect(thermostat.power_saving).toBe(true);
  });

  it("should return false if power saving switched off", function() {
    thermostat.powerSavingOff();
    expect(thermostat.power_saving).toBe(false);
  });

  it("should return true if power saving switched on", function(){
    thermostat.powerSavingOn();
    expect(thermostat.power_saving).toBe(true);
  });

  it("should have a default power saving max temperature of 25 degrees", function() {
    expect(thermostat.max_temp).toEqual(25);
  });

  it("should set the max temp to 32 degrees if power saving switched off", function() {
    thermostat.powerSavingOff();
    expect(thermostat.max_temp).toEqual(32);
  });

  it("should set the max temp to 25 degrees if power saving switched on", function() {
    thermostat.powerSavingOff();
    expect(thermostat.max_temp).toEqual(32);
  });

  it("should raise an error if going above max temp", function() {
    thermostat.temp = thermostat.max_temp;
    expect(function() {
      thermostat.upTemp();
    }).toThrowError("Maximum temperature reached");
  });

  it("should reset temperature to 20 degrees", function() {
    thermostat.reSet();
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it("should output LOW_USAGE if under 18 degrees", function() {
    thermostat.temp = 17;
    expect(thermostat.energyUsage()).toEqual("LOW_USAGE");
  });

  it("should output MEDIUM_USAGE if between 18 and, up to and including, 24 degrees",
  function() {
    thermostat.temp = 24;
    expect(thermostat.energyUsage()).toEqual("MEDIUM_USAGE");
  });

  it("should output HIGH_USAGE if 25 degrees or above", function(){
    thermostat.temp = 25;
    expect(thermostat.energyUsage()).toEqual("HIGH_USAGE");
  });
});

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.MAX_TEMP = 25;
  this.POWER_SAVING = true;
  this.temp = this.DEFAULT_TEMP;
  this.min_temp = this.MIN_TEMP;
  this.max_temp = this.MAX_TEMP;
  this.power_saving = this.POWER_SAVING;
}

Thermostat.prototype.currentTemp = function() {
  return this.temp;
};

Thermostat.prototype.upTemp = function() {
  if (this.temp >= this.max_temp) {
      throw new TypeError("Maximum temperature reached");
  } else {
      return this.temp += 1;
  };
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temp <= this.min_temp) {
      throw new TypeError("Minimum temperature reached");
  } else {
      return this.temp -= 1;
  };
};

Thermostat.prototype.powerSavingOff = function() {
  this.max_temp = 25;
  this.power_saving = false;
};

Thermostat.prototype.reSet = function() {
  this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temp < 18)  {
    return "LOW_USAGE";
  } else if (this.temp < 25) {
    return "MEDIUM_USAGE";
  } else {
    return "HIGH_USAGE";
  };
};

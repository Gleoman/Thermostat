'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.MIN_TEMP = 10;
  this.PSM_MAX_TEMP = 25;
  this.POWER_SAVING = true;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.temp = this.DEFAULT_TEMP;
  this.min_temp = this.MIN_TEMP;
  this.max_temp = this.PSM_MAX_TEMP;
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
  this.max_temp = 32;
  this.power_saving = false;
};

Thermostat.prototype.powerSavingOn = function() {
  this.max_temp = this.MAX_TEMP;
  this.power_saving = this.POWER_SAVING;
};

Thermostat.prototype.reSet = function() {
  this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temp < this.MEDIUM_ENERGY_USAGE_LIMIT)  {
    return "LOW_USAGE";
  } else if (this.temp >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temp < this.PSM_MAX_TEMP) {
    return "MEDIUM_USAGE";
  } else if (this.temp >= this.PSM_MAX_TEMP) {
    return "HIGH_USAGE";
  };
};

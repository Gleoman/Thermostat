function Thermostat() {
  var DEFAULT_TEMP = 20;
  var MIN_TEMP = 10;
  var MAX_TEMP = 32;
  this.temp = DEFAULT_TEMP;
  this.min_temp = MIN_TEMP;
  this.max_temp = MAX_TEMP;
}

Thermostat.prototype.currentTemp = function() {
  return this.temp;
};

Thermostat.prototype.upTemp = function() {
  return this.temp += 1;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temp <= this.min_temp) {
      throw new TypeError("Minimum temperature reached");
  } else {
      return this.temp -= 1;
  };
};

Thermostat.prototype.powerSaving = function() {
  this.max_temp = 25;
};

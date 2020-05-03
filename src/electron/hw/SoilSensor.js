const sensor = require('i2c-seesaw-moisture-sensor')
class SoilSensor {
    constructor(address) {
        this.soilSensor = sensor.open(address);
    }

    read() {
        return this.soilSensor.getMoisture();
    }
}

export default SoilSensor;
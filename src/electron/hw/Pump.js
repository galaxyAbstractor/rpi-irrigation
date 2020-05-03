const Gpio = require('onoff').Gpio;

class Pump {
    constructor(pin) {
        this.pump = new Gpio(pin, 'out');

        this.active = true;
    }

    pump() {

    }

    toggleActive() {
        this.active = !this.active;

        return this.active;
    }
}

export default Pump;
import SoilSensor from "./hw/SoilSensor";
import Pump from "./hw/Pump";

class PlantUnit {
    constructor(mainWindow, plantUnitId, soilSensorAddress, pumpPin) {
        this.id = plantUnitId;
        this.mainWindow = mainWindow;
        this.soilSensor = new SoilSensor(soilSensorAddress);
        this.pump = new Pump(pumpPin);
        this.pumpAtLevel = 1000;

        this.timer = setInterval(this.updateMoistureLevel.bind(this), 1000);
    }

    updateMoistureLevel() {
        this.soilSensor.read().then(level => {
            this.moistureLevel = level;

            this.sendCurrentState();
        });
    }

    sendCurrentState() {
        this.mainWindow.send("update", {
            pump: {
                pumpId: this.id,
                moistureLevel: this.moistureLevel,
                active: this.pump.active,
                pumpAtLevel: this.pumpAtLevel
            }
        });
    }
}

export default PlantUnit;
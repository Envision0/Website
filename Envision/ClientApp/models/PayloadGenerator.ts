import { Payload, PayloadPart } from './ComponentModels';

export default class PayloadGenerator {
    public static generatePayload = (): Payload => {
        let payload: Payload = new Payload();

        let windSensor: PayloadPart = new PayloadPart();
        windSensor.name = "Wind Sensor";
        windSensor.description = "The wind sensor measures wind speed and of the surrounding atmosphere. Like many of the other sensors, this helps to build a model of the atmospheric conditions near the Martian surface to generate the maps seen on this site."
        windSensor.iconUrl = "./images/arrow.png";
        windSensor.className = "windSensor";
        payload.parts.push(windSensor);

        let solarPanels: PayloadPart = new PayloadPart();
        solarPanels.name = "Solar Panels";
        solarPanels.description = "The Solar panel array is designed to power the sensors and charge the onboard batteries. Servos allow the arrays to tilt to improve the amount of light absorbed by the panels. Due to dust storms on mars the solar panel array is designed to rotate to clear the solar panels of dust and debris when the ambient light sensor detects a sufficient light levels to power the system.This is a lesson that was learned from the Curiosity rover and reduces the reliance on martian wind conditions, which only happen at particular times of year.";
        solarPanels.iconUrl = "./images/solar.png";
        solarPanels.className = "solarPanels";
        payload.parts.push(solarPanels);

        let sensorPackage: PayloadPart = new PayloadPart();
        sensorPackage.name = "Sensor Package";
        sensorPackage.description = "The Printed Circuit Board is housed inside the payload and consists of the following components that meet our scientific objectives: Ambient Light Sensor, Light Spectrometer, Barometer and Accelerometer. The Ambient Light Sensor allows the payload to understanding lighting conditions, remain active and operate during certain light conditions. The Light Spectrometer breaks down the Sun’s spectrum to better understand Mars’ atmosphere and is complementary to the Barometer, which measures altitude during deployment and atmospheric pressures. The Accelerometer will detect seismic activity, allowing the data to pinpoint locations and intensity of meteor strikes and marsquakes.";
        sensorPackage.iconUrl = "./images/board.png";
        sensorPackage.className = "sensorPackage";
        payload.parts.push(sensorPackage);

        let spike: PayloadPart = new PayloadPart();
        spike.name = "Ground Spike";
        spike.description = "The combined ground spike and payload body ensures maximum safety for the payload due to the extreme forces exerted on the payload on impact. It also provides a way for sensors to safely monitor the Martian Soil. The Sensors integrated into the ground spike include a temperature sensor to provide important atmospheric and geologic data during deployment, as well as moisture and soil sensors to notify scientists of the soil conditions in order to plot where future ideal farmland may be, while improving weather information.";
        spike.iconUrl = "./images/drill.png";
        spike.className = "spike";
        payload.parts.push(spike);

        return payload;
    }
}
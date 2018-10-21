import { Payload, PayloadPart } from './ComponentModels';

export default class PayloadGenerator {
    public static generatePayload = (): Payload => {
        let payload: Payload = new Payload();

        let solarPanels: PayloadPart = new PayloadPart();
        solarPanels.name = "Solar Panels";
        solarPanels.description = "The solar panels provide power for the Envision payload to run.";
        solarPanels.iconUrl = "";
        payload.parts.push(solarPanels);

        let otherThing: PayloadPart = new PayloadPart();
        otherThing.name = "Other Thing";
        otherThing.description = "This is another thing just for testing sake.";
        payload.parts.push(otherThing);

        return payload;
    }
}
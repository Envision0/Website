export class Payload {
    constructor() {
        this.parts = [];
    }

    public parts: PayloadPart[];
}

export class PayloadPart {
    private static i = 0;
    constructor() {
        this.name = "";
        this.id = PayloadPart.i;
        this.iconUrl = "";
        this.description = "";
        this.className = "";
        PayloadPart.i++;
    }

    public name: string;
    public id: number;
    public iconUrl: string;
    public description: string;
    public className: string;
}
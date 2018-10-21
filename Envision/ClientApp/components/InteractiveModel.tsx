import * as React from 'react';
import { Payload, PayloadPart } from '../models/ComponentModels';
import PayloadGenerator from '../models/PayloadGenerator';

interface InteractiveModelProps {

}

interface InteractiveModelState {
    payload: Payload;
    activePart: PayloadPart;
}

export default class InteractiveModel extends React.Component<InteractiveModelProps, InteractiveModelState>{
    constructor(props: InteractiveModelProps) {
        super(props);

        this.state = {
            payload: PayloadGenerator.generatePayload(),
            activePart: new PayloadPart(),
        }
    }

    onPartClick = (e: any, id: number): void => {
        let selected = this.state.payload.parts.filter((part) => {
            return part.id === id;
        });
        this.setState({
            activePart: selected[0],
        });
    }
    
    render() {
        return (
            <div>
                <div className="row spaced">
                    <div className="col-xs-12">
                        <span>Click on the model below to learn more about the Envision payload</span>
                    </div>
                </div>
                <div className="row spaced">
                    <div className="col-xs-12 modelContainer">
                        {this.state.payload.parts.map((part: PayloadPart) => {
                            return (<img src={part.iconUrl} alt={part.name} className={part.className} onClick={(e) => { this.onPartClick(e, part.id) }} />);
                        })}
                    </div>
                </div>
                {this.state.activePart ? 
                    <div>
                        <div className="row spaced">
                            <div className="col-xs-12 sectionHeader">
                                <span>{this.state.activePart.name}</span>
                            </div>
                        </div>
                        <div className="row spaced">
                            <div className="col-xs-12">
                                <img src={this.state.activePart.iconUrl} alt={this.state.activePart.name} />
                            </div>
                        </div>
                        <div className="row spaced">
                            <div className="col-xs-12">
                                {this.state.activePart.description}
                            </div>
                        </div>
                    </div>
                : null}
            </div>
        );
    }
}
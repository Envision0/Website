import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export default class Location extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return (
            <div>
                <div className="row spaced">
                    <div className="col-xs-12 banner">
                        <span>Where on Mars is Envision?</span>
                    </div>
                </div>
                <div className="row spaced">
                    <div className="col-xs-12">
                        <span>Each dot on the map below represents the location of an Envision unit</span>
                    </div>
                </div>
                <div className="row spaced">
                    <img className="marsMap" src="./images/Map of Mars with Sensors.gif" alt="Map of Envision Locations" />
                </div>
            </div>
        );
    }
}
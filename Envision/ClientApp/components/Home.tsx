import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return (
            <div className="background">
                <div className="infoContainer">
                    <div className="row spaced">
                        <div className="col-xs-9 banner">
                            <span>The Envision Mission</span>
                        </div>
                        <div className="col-xs-3">
                            <img className="bigLogo" src="./images/EnvisionLogo.gif" alt="Envision" />
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className="col-xs-12">
                            <span>Envision is a scientific payload mission designed to observe geological activity, specifically marsquakes. The mission will be powered via satellite, allowing data to be transmitted and broadcasted onto computer applications and cellular devices. This will allow students, scientists, astronaut's families and the public to see Mars' conditions more accurately in real time, since it will be complimentary to data being collected by NASA's InSight mission.</span>
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className="col-xs-12">
                            <span>The High Impact Long Duration Environmental Monitoring System (HILDa EMS) measures the vital signs, such as the geologic and weather data of Mars, then relays information up to a monitoring satellite to be relayed back to Earth or one of Mars' colonies. </span>
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className="col-xs-12">
                            <span>The Envision mission as a whole is designed to make data, once difficult to understand by the average person, accessible to those at home by providing a simple and easy to understand interface.</span>
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className="col-xs-12 sectionHeader">
                            <span>The Journey</span>
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className="col-xs-12">
                            <img src="./images/Envision to Mars.gif" alt="Orbital Insertion" />
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className="col-xs-12">
                            <span>Envision will endure the vacuum of space and travel at escape velocity to find its home on a new planet. While on its way to Mars it will have enter the void, dodge meteorites which block its path, but its toughest battle will be bearing the responsibility of caring for its future astronauts. and upon entering the atmosphere of Mars it will find a new home.</span>
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className="col-xs-12 sectionHeader">
                            <span>The Instruments</span>
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className="col-xs-12">
                            <img className="model" src="./images/key672.7.gif" alt="Instruments" />
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className="col-xs-12">
                            <span>Envision will house the payload HILDA EMS, which is designed to be a long-duration Ecospheric monitoring device to aid with the colonization and terraforming of mars. HILDA EMS measures the vital signs of Mars to relay information up to a cluster monitoring satellite to be relayed back to Earth, or one of Mars' colonies.</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

import * as React from 'react';

interface ConditionsMapState {
    currentOverlay: string;
    currentOverlayName: string;
}

export default class ConditionsMap extends React.Component<{}, ConditionsMapState>{
    constructor(props: {}) {
        super(props);

        this.state = {
            currentOverlay: "",
            currentOverlayName: "",
        }
    }

    onOptionClick = (e: any, newOverlay: string, newOverlayName: string) => {
        if (this.state.currentOverlayName === newOverlayName) {
            this.setState({
                currentOverlay: "",
                currentOverlayName: "",
            });
        } else {
            this.setState({
                currentOverlay: newOverlay,
                currentOverlayName: newOverlayName,
            });
        }
    }

    render() {
        return (
            <div>
                <div className="row spaced">
                    <div className="col-xs-12 banner">
                        <span>What is Mars like right now?</span>
                    </div>
                </div>
                <div className="row spaced">
                    <div className="col-xs-12">
                        <span>Click a button below to display that type of data</span>
                    </div>
                </div>
                <div className="row spaced">
                    <div className="marsMap">
                        {this.state.currentOverlay ? <img className="overlayImage" src={this.state.currentOverlay} alt={this.state.currentOverlayName} /> : null}
                        <div className="row spaced buttonList">
                            <div className="row spaced">
                                <button className={this.state.currentOverlayName === "Wind" ? "btn btn-active" : "btn"} onClick={(e) => { this.onOptionClick(e, "./images/SpeedAndDir.gif", "Wind") }}>Wind</button>
                            </div>
                            <div className="row spaced">
                                <button className={this.state.currentOverlayName === "Soil PH" ? "btn btn-active" : "btn"} onClick={(e) => { this.onOptionClick(e, "./images/Ph.gif", "Soil PH") }}>Soil PH</button>
                            </div>
                            <div className="row spaced">
                                <button className={this.state.currentOverlayName === "Temperature" ? "btn btn-active" : "btn"} onClick={(e) => { this.onOptionClick(e, "./images/Temp.gif", "Temperature") }}>Temperature</button>
                            </div>
                            <div className="row spaced">
                                <button className={this.state.currentOverlayName === "Quakes" ? "btn btn-active" : "btn"} onClick={(e) => { this.onOptionClick(e, "./images/Circle Final.gif", "Quakes") }}>Quakes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
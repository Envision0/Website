import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Data extends React.Component<RouteComponentProps<{}>, {}> {
    render() {
        return (
            <div className="background">
                <div className="infoContainer">
                    <div className="row spaced">
                        <div className="col-xs-12 banner">
                            <span>Envision Data</span>
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className="col-xs-12">
                            <span>Below is data recorded by the Envision project</span>
                        </div>
                    </div>
                    <div className="row spaced">
                        <div className="col-xs-12">
                            <img src="./images/graph.gif" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

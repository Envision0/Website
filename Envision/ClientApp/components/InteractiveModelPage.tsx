import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import InteractiveModel from './InteractiveModel';

export default class InteractiveModelPage extends React.Component<RouteComponentProps<{}>, {}>{
    render() {
        return (
            <div className="background">
                <div className="infoContainer">
                    <div className="row spaced">
                        <div className="col-xs-12 banner">
                            Explore Envision
                        </div>
                    </div>
                    <InteractiveModel />
                </div>
            </div>
        );
    }
}
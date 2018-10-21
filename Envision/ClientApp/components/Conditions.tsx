import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import ConditionsMap from './ConditionsMap';

interface ConditionsState {
    currentOverlay: string;
    currentOverlayName: string;
}

export default class Conditions extends React.Component<RouteComponentProps<any>, {}>{
    render() {
        return (
            <div>
                <ConditionsMap />
            </div>
        );
    }
}
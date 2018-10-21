import * as React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './Navigation';
import { RouteComponentProps } from 'react-router';

export class Layout extends React.Component<{}, {}> {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={3} className="noPadding">
                        <NavMenu />
                    </Col>
                    <Col sm={9} className="noPadding">
                        {this.props.children}
                    </Col>
                </Row>
            </Grid>
        );
    }
}

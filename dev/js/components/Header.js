/**
 * Created by Daniel on 2016-08-07.
 */
import React from 'react';
import {IndexLink, Link} from 'react-router';
import {Grid, Row, Col, Image} from 'react-bootstrap';

class Header extends React.Component {
  render() {
    return (
      <Grid fluid>
        <div className="center">
          <IndexLink className="center" to="/"><img height={150} src="img/logo.png" /></IndexLink>
        </div>
        <Row className="nav">
          <Col xs={5}>
            <Col md={4}><IndexLink className="item" to="/" activeClassName="active">Hem<hr/></IndexLink></Col>
            <Col md={4}><Link className="item" to="/about" activeClassName="active">Om stugan<hr/></Link></Col>
            <Col md={4}><Link className="item" to="/guest" activeClassName="active">För hyresgäster<hr/></Link></Col>
          </Col>
          <Col xs={2}></Col>
          <Col xs={5}>
            <Col md={4}><Link className="item" to="/booking" activeClassName="active">Bokning<hr/></Link></Col>
            <Col md={4}><Link className="item" to="/contact" activeClassName="active">Kontakt<hr/></Link></Col>
            <Col md={4}><Link className="item" to="/find" activeClassName="active">Hitta hit<hr/></Link></Col>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Header;
import React from 'react';
import {IndexLink, Link} from 'react-router';
import {Grid, Row, Col, Image} from 'react-bootstrap';

class About extends React.Component {
  render() {
    return (
      <Grid fluid className="pageContainer">
        <Row>
          <Col xs={6}>
            <p>
              Charmig fjällstuga med 7 bäddar (+liten barnsäng), alldeles intill Kläppens skidområde, pulkabacke och lekpark.
              Stugan har en öppen och härlig planlösning med takhöjd upp till nock. Två sovrum; ett med dubbelsäng och ett med våningssäng samt mindre barnsäng. Stort mysigt sov-loft med 3 riktiga sängar. Vattentoalett och dusch. Full köksutrustning, kyl, frys, diskmaskin samt mikrovågsugn. TV, DVD samt bra mobiltäckning. Stugan värms med luftvärmepump samt direktvärmande el.
            </p>
          </Col>
          <Col xs={6}>
            <p>
              ”Kulan” byggdes år 1978 av familjen Levedahl. Första åren stod Sälenfjället för utförsåkningen, men 1982 fick vi en ny granne, <a href="http://klappen.se" target="_blank">Kläppens skidområde</a>.
              Kulans läge visade sig vara ett lyckokast, då Kläppen byggde sina liftar 100 meter ifrån stugan.
            </p>
            <h5>Vi vill att ni ska ha en så skön och trevlig vistelse som möjligt!</h5>
            <h5>Har du frågor? Kontakta oss på <a href="mailto:boka@kulaniklappen.se">boka@kulaniklappen.se</a></h5>
          </Col>
        </Row>
        <Row>
          <h4 className="center">Vi som hyr ut stugan är</h4>
          <Row>
            <Col xs={6} className="center">
              <Image src="img/carinanders.jpg" alt="Carin och Anders"/>
              <h5 className="center">Carin & Anders Sandblom</h5>
            </Col>
            <Col xs={6} className="center">
              <Image src="img/johankicki.jpg" alt="Johan och Kicki"/>
              <h5 className="center">Johan & Kicki Levedahl</h5>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col xs={6} className="center">
            <h4 className="center">Följ oss på Facebook för uppdateringar!</h4>
            <div className="fb-follow" data-href="https://www.facebook.com/kulaniklappen" data-width="50" data-height="50" data-layout="standard" data-size="small" data-show-faces="true"></div>
          </Col>
          <Col xs={6}>
            <h4 className="center">Följ oss även på instagram för kul bilder!</h4>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About;
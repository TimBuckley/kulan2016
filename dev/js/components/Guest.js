import React from 'react';
import {IndexLink, Link} from 'react-router';
import {Grid, Row, Col, Table} from 'react-bootstrap';

export default class Guest extends React.Component {
  render() {
    return (
      <Grid fluid className="pageContainer">
        <Col md={4}>
          <h2>Ankomst</h2>
          <p>Ankomst sker tidigast kl. 15:00 på ankomstdagen.</p>
          <p>Nyckeln till stugan finns i en kodbox precis utanför dörren, koden får du på mailen vid slutbetalning.</p>
        </Col>
        <Col md={4}>
          <h2>Under Vistelsen</h2>
          <p>Stugan värms upp delvis av direktverkande el, var försiktiga då elementen blir väldigt varma, elementen får inte övertäckas.</p>
          <p>Reglera i första hand värmen via luftvärmepumpen samt med termostaten på väggen.</p>
          <p>Rökning är inte tillåten inomhus.</p>
          <p>Sop- och återvinningsstation finns längs med bilvägen innan branta backen upp till stugan.</p>
        </Col>
        <Col md={4}>
          <h2>Avfärd</h2>
          <p>Avfärd sker senast kl. 12:00 på avresedagen.</p>
          <p>Lämna stugan i det skick du själv skulle vilja finna den, dvs städa och gör det trevligt för nästa gäst.</p>
          <p>Checklista för städning:</p>
          <ul>
            <li>Dammsug alla golv i stugan.</li>
            <li>Gör rent handfat, dusch och toalettstol.</li>
            <li>Våttorka golven i kök och badrum.</li>
            <li>Damma av alla fria ytor.</li>
            <li>Vädra sängkläder och skaka mattor.</li>
            <li>Torka ur kyl och frys, dessa ska lämnas påslagna.</li>
          </ul>
          <p>Återlämna nyckeln i det kodade skåpet.</p>
        </Col>
      </Grid>
    );
  }
}
import React from 'react';
import {Grid, Table} from 'react-bootstrap';
import Tabletop from 'tabletop';
import TableRow from './TableRow';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.data = [];

    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/1QxC20NcuHzqp1Fp7Dy2gpBDbJzN4YpmjiEcr7PSpsuM/pubhtml',
      callback: (data, tabletop) => this.data = data,
      simpleSheet: true,
      parseNumbers: true
    });

    console.log(this);
  }

  render() {
    return (
      <Grid fluid className="pageContainer">
        <h4>För att boka, skicka ett mail till oss <a href="mailto:boka@kulaniklappen.se">här!</a></h4>
        <Table responsive>
          <thead>
          <tr>
            <th>Ledighet</th>
            <th>Vecka</th>
            <th>Datum</th>
            <th>Pris</th>
          </tr>
          </thead>
          <tbody>
            {this.data.map( function(row, i) {
              return (
                <TableRow key={i} data={row}/>
              );
            })}
          </tbody>
        </Table>
      </Grid>
    );
  }
}

export default Booking;
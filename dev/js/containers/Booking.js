import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Table} from 'react-bootstrap';
import TableRow from '../components/TableRow';

class Booking extends Component {
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
            {this.props.spreadsheetData.map((row, i) => {
              return (
                <TableRow key={i} data={row} />
              )
            })}
          </tbody>
        </Table>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    spreadsheetData: state.spreadsheetData,
    loading: state.loading,
    errorMsg: state.errorMsg
  }
}

export default connect(mapStateToProps)(Booking);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Table} from 'react-bootstrap';
import TableRow from './TableRow';

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class Booking extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a user...</div>);
        }
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

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        bookingData: state.bookingData
    };
}

export default connect(mapStateToProps)(Booking);
